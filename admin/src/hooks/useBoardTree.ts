// useBoardTree.ts
import axios from '@/lib/axios';
import type { BoardDetail } from '@/types/board';
import { useEffect, useState } from 'react';

export type TreeNode = BoardDetail & {
  children?: TreeNode[];
};

export default function useBoardTree() {
  const [tree, setTree] = useState<TreeNode[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTree = async () => {
    setLoading(true);
    try {
      const res = await axios.get<TreeNode[]>('/board/tree/all');
      const flat = res.data;
      const built = buildTree(flat);
      const sorted = sortTree(built);
      setTree(sorted);
    } catch (err) {
      console.error('❌ 트리 로드 실패:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTree();
  }, []);

  return { tree, loading, refetch: fetchTree };
}

function buildTree(flat: TreeNode[]): TreeNode[] {
  const map = new Map<number, TreeNode>();
  const roots: TreeNode[] = [];

  flat.forEach((node) => {
    map.set(node.id, { ...node, children: [] });
  });

  flat.forEach((node) => {
    if (node.parentId && map.has(node.parentId)) {
      map.get(node.parentId)!.children!.push(map.get(node.id)!);
    } else {
      roots.push(map.get(node.id)!);
    }
  });

  return roots;
}

function sortTree(nodes: TreeNode[]): TreeNode[] {
  return nodes
    .sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0))
    .map((node) => ({
      ...node,
      children: node.children ? sortTree(node.children) : [],
    }));
}
