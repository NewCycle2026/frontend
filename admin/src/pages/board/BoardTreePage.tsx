// src/pages/board/BoardTreePage.tsx
import Breadcrumb from '@/components/Breadcrumb';
import useBoardTree, { type TreeNode } from '@/hooks/useBoardTree';
import axios from '@/lib/axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function BoardTreePage() {
  const navigate = useNavigate();
  const { tree, loading, refetch } = useBoardTree();

  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까? 하위 게시판도 함께 삭제됩니다.')) return;
    try {
      await axios.delete(`/board/${id}?force=true`);
      toast.success('삭제 완료');
      refetch();
    } catch (err) {
      toast.error('삭제 실패');
    }
  };

  const renderTree = (nodes: TreeNode[]) =>
    nodes.map((node) => (
      <li key={node.id} className="ml-2">
        <div className="flex items-center justify-between group pr-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
          <div className="flex items-center gap-2">
            <span>{node.icon || '📁'}</span>
            <span className="text-gray-800 dark:text-gray-100 font-medium truncate max-w-[300px]">
              {node.name}
            </span>
          </div>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
            <button
              onClick={() => navigate(`/admin/board/${node.id}/edit`)}
              className="text-xs text-blue-600 hover:underline"
            >
              수정
            </button>
            <button
              onClick={() => handleDelete(node.id)}
              className="text-xs text-red-600 hover:underline"
            >
              삭제
            </button>
            <button
              onClick={() => navigate(`/admin/board/create?parentId=${node.id}`)}
              className="text-xs text-green-600 hover:underline"
            >
              + 하위 생성
            </button>
          </div>
        </div>
        {node.children && node.children.length > 0 && (
          <ul className="ml-6 border-l border-gray-300 dark:border-gray-700 pl-3 mt-1 space-y-1">
            {renderTree(node.children.sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0)))}
          </ul>
        )}
      </li>
    ));

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Breadcrumb items={['게시판 관리', '계층 구조 관리']} />
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        📚 게시판 구조 관리
      </h1>
      {loading ? (
        <p className="text-gray-700 dark:text-gray-200">불러오는 중...</p>
      ) : (
        <ul className="space-y-1">
          {renderTree(tree.sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0)))}
        </ul>
      )}
    </div>
  );
}
