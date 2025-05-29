// src/pages/board/BoardCreatePage.tsx
import Breadcrumb from "@/components/Breadcrumb";
import type { BoardCreateDto } from "@/hooks/useBoardCreate";
import useCreateBoard from "@/hooks/useBoardCreate";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function useQuery() {
  const { search } = useLocation();
  return new URLSearchParams(search);
}

export default function BoardCreatePage() {
  const navigate = useNavigate();
  const query = useQuery();
  const { createBoard } = useCreateBoard();

  const parentIdFromQuery = query.get("parentId");

  const [form, setForm] = useState<BoardCreateDto>({
    name: "",
    slug: "",
    description: "",
    type: "master",
    parentId: parentIdFromQuery ? Number(parentIdFromQuery) : null,
    isPublic: true,
    allowPost: true,
    allowComment: true,
    allowFile: false,
    writePermission: "ALL",
    commentPermission: "ALL",
    filePermission: "LOGIN",
    displayOrder: 1,
    icon: "📢",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (form.name && !form.slug) {
      const slug = form.name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "_")
        .replace(/[^a-z0-9_]/g, "");
      setForm((prev) => ({ ...prev, slug }));
    }
  }, [form.name]);

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
    setError("");

    if (!form.name.trim()) return setError("게시판 이름은 필수입니다.");
    if (!form.slug.trim()) return setError("슬러그는 필수입니다.");

    try {
      await createBoard(form);
      toast.success("✅ 게시판이 성공적으로 생성되었습니다.");
      navigate("/admin/board/list");
    } catch (err: any) {
      const status = err.response?.status;
      const serverMsg = err.response?.data?.message;
      const message =
        status === 409
          ? "⚠️ 동일한 이름 또는 슬러그의 게시판이 이미 존재합니다."
          : status === 400
          ? `입력 값 오류: ${serverMsg || "잘못된 요청입니다."}`
          : status === 500
          ? "서버 내부 오류가 발생했습니다."
          : serverMsg || "알 수 없는 오류가 발생했습니다.";
      setError(message);
      toast.error(message);
    }
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 space-y-12 min-h-screen">
      <Breadcrumb items={["게시판 관리", "게시판 생성"]} />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        📋 게시판 생성
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium mb-1">게시판 이름 *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 dark:bg-gray-800"
            placeholder="공지사항"
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
            pattern="[a-z0-9_]+"
            title="영문 소문자, 숫자, 언더바(_)만 사용 가능합니다."
            className="w-full border rounded px-4 py-2 dark:bg-gray-800"
            placeholder="board_notice"
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
            placeholder="게시판 설명 입력"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">게시판 유형</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 dark:bg-gray-800"
          >
            <option value="master">마스터</option>
            <option value="post">게시글</option>
            <option value="comment">댓글</option>
            <option value="file">파일</option>
          </select>
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
            placeholder="예: 📢, 💬, 🔒"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition active:scale-[0.98]"
        >
          생성하기
        </button>
      </form>
    </div>
  );
}
