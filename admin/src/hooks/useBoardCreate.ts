// src/hooks/useBoardCreate.ts
import axios from "@/lib/axios";

export interface BoardCreateDto {
  name: string;
  slug: string;
  description?: string;
  type: "master" | "post" | "comment" | "file";
  parentId?: number | null;
  isPublic: boolean;
  allowPost: boolean;
  allowComment: boolean;
  allowFile: boolean;
  writePermission: "ALL" | "LOGIN" | "ADMIN";
  commentPermission: "ALL" | "LOGIN" | "ADMIN";
  filePermission: "ALL" | "LOGIN" | "ADMIN";
  displayOrder: number;
  icon?: string;
}

export default function useCreateBoard() {
  const createBoard = async (data: BoardCreateDto) => {
    const res = await axios.post("/board", data);
    return res.data;
  };

  return { createBoard };
}
