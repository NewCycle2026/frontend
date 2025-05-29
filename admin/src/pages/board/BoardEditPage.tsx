// src/pages/board/BoardEditPage.tsx
import Breadcrumb from '@/components/Breadcrumb';
import useBoardDetail from '@/hooks/useBoardDetail';
import axios from '@/lib/axios';
import type { CreateBoardDto } from '@/types/board';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function BoardEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { board, loading } = useBoardDetail(Number(id));

  const [form, setForm] = useState<CreateBoardDto>({
    name: '',
    slug: '',
    description: '',
    type: 'master',
    parentId: null,
    isPublic: true,
    allowPost: true,
    allowComment: true,
    allowFile: false,
    writePermission: 'ALL',
    commentPermission: 'ALL',
    filePermission: 'LOGIN',
    displayOrder: 1,
    icon: '📢',
  });

  const [error, setError] = useState('');

  useEffect(() => {
    if (board) {
      setForm({
        name: board.name,
        slug: board.slug,
        description: board.description || '',
        type: board.type,
        parentId: board.parent?.id || null,
        isPublic: board.isPublic,
        allowPost: board.allowPost,
        allowComment: board.allowComment,
        allowFile: board.allowFile,
        writePermission: board.writePermission,
        commentPermission: board.commentPermission,
        filePermission: board.filePermission,
        displayOrder: board.displayOrder,
        icon: board.icon || '📢',
      });
    }
  }, [board]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim()) return setError('게시판 이름은 필수입니다.');
    if (!form.slug.trim()) return setError('슬러그는 필수입니다.');

    try {
      await axios.patch(`/board/${id}`, form);
      toast.success('✅ 게시판 수정 완료');
      navigate(`/admin/board/${id}`);
    } catch (err: any) {
      const status = err.response?.status;
      const message =
        status === 404
          ? '게시판을 찾을 수 없습니다.'
          : status === 400
          ? `입력 오류: ${err.response?.data?.message || '요청이 잘못되었습니다.'}`
          : status === 409
          ? '중복된 게시판 이름 또는 슬러그가 존재합니다.'
          : '예상치 못한 오류가 발생했습니다.';
      toast.error(message);
      setError(message);
    }
  };

  if (loading || !board) return <p className="p-6">불러오는 중...</p>;

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 space-y-12 min-h-screen">
      <Breadcrumb items={['게시판 관리', '게시판 수정']} />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">📋 게시판 수정</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium mb-1">게시판 이름 *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 dark:bg-gray-800"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">슬러그 *</label>
          <input
            type="text"
            name="slug"
            value={form.slug}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 dark:bg-gray-800"
            pattern="[a-z0-9_]+"
            title="영문 소문자, 숫자, 언더바(_)만 사용 가능합니다."
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">설명</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 dark:bg-gray-800"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="isPublic"
              checked={form.isPublic}
              onChange={handleCheckbox}
            />
            공개 여부
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="allowPost"
              checked={form.allowPost}
              onChange={handleCheckbox}
            />
            글 작성 허용
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="allowComment"
              checked={form.allowComment}
              onChange={handleCheckbox}
            />
            댓글 허용
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="allowFile"
              checked={form.allowFile}
              onChange={handleCheckbox}
            />
            파일 첨부 허용
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">쓰기 권한</label>
            <select
              name="writePermission"
              value={form.writePermission}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 dark:bg-gray-800"
            >
              <option value="ALL">전체</option>
              <option value="LOGIN">로그인</option>
              <option value="ADMIN">관리자</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">댓글 권한</label>
            <select
              name="commentPermission"
              value={form.commentPermission}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 dark:bg-gray-800"
            >
              <option value="ALL">전체</option>
              <option value="LOGIN">로그인</option>
              <option value="ADMIN">관리자</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">파일 권한</label>
            <select
              name="filePermission"
              value={form.filePermission}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 dark:bg-gray-800"
            >
              <option value="ALL">전체</option>
              <option value="LOGIN">로그인</option>
              <option value="ADMIN">관리자</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">표시 순서</label>
            <input
              type="number"
              name="displayOrder"
              value={form.displayOrder}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 dark:bg-gray-800"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1">아이콘 (이모지)</label>
          <input
            type="text"
            name="icon"
            value={form.icon}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 dark:bg-gray-800"
            placeholder="예: 📢"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex gap-4 mt-6 justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            저장
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/board/list')}
            className="px-6 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
}
