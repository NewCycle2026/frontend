// src/hooks/useBoardList.ts

import axios from "@/lib/axios";
import { useEffect, useState } from "react";

export type Board = {
  id: number;
  name: string;
  slug: string;
  type: string;
  isPublic: boolean;
  displayOrder: number;
};

export default function useBoardList() {
  const [boards, setBoards] = useState<Board[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const res = await axios.get<Board[]>("/board/list"); // ✅ 핵심 포인트
        console.log("✅ API 응답 확인:", res.data);       // ✅ 콘솔로 실제 배열 확인
        setBoards(res.data); // ✅ boards만 정확하게 설정
      } catch (error) {
        console.error("❌ 게시판 목록 로딩 실패:", error);
        setBoards([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBoards();
  }, []);

  return { boards, loading };
}

