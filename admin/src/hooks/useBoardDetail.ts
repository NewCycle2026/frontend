// src/hooks/useBoardDetail.ts
import axios from '@/lib/axios';
import type { BoardDetail } from '@/types/board'; // ✅ 공통 타입 import
import { useEffect, useState } from 'react';

export default function useBoardDetail(id: number) {
  const [board, setBoard] = useState<BoardDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const res = await axios.get<BoardDetail>(`/board/${id}`);
        setBoard(res.data);
      } catch (error) {
        console.error('❌ 게시판 상세 조회 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBoard();
  }, [id]);

  return { board, loading };
}

/*
import axios from '@/lib/axios';
import { useEffect, useState } from 'react';

export type BoardDetail = {
  id: number;
  name: string;
  slug: string;
  type: string;
  isPublic: boolean;
  displayOrder: number;
  parent?: BoardDetail | null;
  children?: BoardDetail[];
};

export default function useBoardDetail(id: number) {
  const [board, setBoard] = useState<BoardDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const res = await axios.get<BoardDetail>(`/board/${id}`);
        setBoard(res.data);
      } catch (error) {
        console.error('❌ 게시판 상세 조회 실패:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBoard();
  }, [id]);

  return { board, loading };
}
*/
