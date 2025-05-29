// src/types/board.ts
export interface CreateBoardDto {
  name: string;
  slug: string;
  description?: string;
  type: 'master' | 'post' | 'comment' | 'file';
  parentId?: number | null;
  isPublic: boolean;
  allowPost: boolean;
  allowComment: boolean;
  allowFile: boolean;
  writePermission: 'ALL' | 'LOGIN' | 'ADMIN';
  commentPermission: 'ALL' | 'LOGIN' | 'ADMIN';
  filePermission: 'ALL' | 'LOGIN' | 'ADMIN';
  displayOrder: number;
  icon?: string;
}

export interface BoardDetail extends CreateBoardDto {
  id: number;
  parent?: {
    id: number;
    name: string;
  } | null;
  createdAt: string;
  updatedAt: string;
}

