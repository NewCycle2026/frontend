// src/pages/board/BoardList.tsx
import Breadcrumb from '@/components/Breadcrumb';
import useBoardList from '@/hooks/useBoardList';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BoardListPage() {
  const { boards, loading } = useBoardList();
  const [search, setSearch] = useState('');

  const filteredBoards = boards.filter((board) =>
    board.name.toLowerCase().includes(search.toLowerCase()) ||
    board.slug.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    console.log('✅ 전체 boards:', boards);
  }, [boards]);

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 space-y-12 min-h-screen">
      <Breadcrumb items={['게시판 관리', '게시판 목록']} />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">📋 게시판 목록</h1>
        <Link
          to="/admin/board/create"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + 게시판 생성
        </Link>
      </div>

      <input
        type="text"
        placeholder="게시판 이름 또는 슬러그 검색..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 px-4 py-2 border rounded dark:bg-gray-800"
      />

      {loading ? (
        <p className="text-gray-500">불러오는 중...</p>
      ) : (
        <table className="w-full border border-gray-300 dark:border-gray-600 text-sm">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">이름</th>
              <th className="px-4 py-2 text-left">슬러그</th>
              <th className="px-4 py-2 text-left">타입</th>
              <th className="px-4 py-2 text-center">공개 여부</th>
              <th className="px-4 py-2 text-center">정렬 순서</th>
            </tr>
          </thead>
          <tbody>
            {filteredBoards.map((board) => (
              <tr key={board.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2">
                  <Link to={`/admin/board/${board.id}`} className="text-blue-600 hover:underline">
                    {board.name}
                  </Link>
                </td>
                <td className="px-4 py-2">{board.slug}</td>
                <td className="px-4 py-2">{board.type}</td>
                <td className="px-4 py-2 text-center">{board.isPublic ? '✅' : '🔒'}</td>
                <td className="px-4 py-2 text-center">{board.displayOrder}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
