// src/pages/board/BoardDetailPage.tsx

import Breadcrumb from '@/components/Breadcrumb';
import useBoardDetail from '@/hooks/useBoardDetail';
import axios from '@/lib/axios';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function BoardDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { board, loading } = useBoardDetail(Number(id));
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;
    try {
      setDeleting(true);
      await axios.delete(`/board/${id}`);
      alert('삭제 완료!');
      navigate('/admin/board/list');
    } catch (err) {
      console.error(err);
      alert('삭제 중 오류 발생');
    } finally {
      setDeleting(false);
    }
  };

  if (loading || !board)
    return <p className="p-6">📡 불러오는 중...</p>;

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 space-y-12 min-h-screen">
      <Breadcrumb items={['게시판 관리', '게시판 상세']} />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">📄 게시판 상세</h1>
        <div className="flex gap-2">
          <Link
            to={`/admin/board/${id}/edit`}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            ✏️ 수정
          </Link>
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            🗑 삭제
          </button>
          <Link
            to="/admin/board/list"
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
          >
            목록
          </Link>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <table className="w-full text-left border border-gray-300 dark:border-gray-600">
          <tbody>
            <tr className="border-b">
              <th className="p-2 w-1/4 bg-gray-100 dark:bg-gray-700">이름</th>
              <td className="p-2">{board.name}</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100 dark:bg-gray-700">슬러그</th>
              <td className="p-2">{board.slug}</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100 dark:bg-gray-700">타입</th>
              <td className="p-2">{board.type}</td>
            </tr>
            <tr className="border-b">
              <th className="p-2 bg-gray-100 dark:bg-gray-700">공개 여부</th>
              <td className="p-2">{board.isPublic ? '✅ 공개' : '🔒 비공개'}</td>
            </tr>
            <tr>
              <th className="p-2 bg-gray-100 dark:bg-gray-700">정렬 순서</th>
              <td className="p-2">{board.displayOrder}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
