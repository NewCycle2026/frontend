// src/pages/community/travel/TravelBoardWritePage.tsx

import { EditorState } from "draft-js";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../layouts/LayoutMain";


const currentUserName = ""; // 또는 getCurrentUser()?.name ?? ''

export default function TravelBoardWritePage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log({
      title,
      author,
      content: editorState.getCurrentContent().getPlainText(),
    });
    // → 추후 API 연동 시 axios.post('/community/travel', {...}) 연결
    navigate("/community/travel");
  };

  return (
    <MainLayout>
      <section className="relative h-[20vh] bg-emerald-700 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-4 max-w-lg mx-auto animate-fadeIn">
          <h1 className="text-3xl md:text-xl font-extrabold mb-4">여행 후기 글쓰기</h1>
          <p className="text-lg">당신의 여행 경험을 모두에게 공유해 주세요.</p>
        </div>
      </section>
      
      <section className="max-w-4xl mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 text-lg font-semibold">제목</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} 
            className="w-full h-12 px-4 border text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"/>
          </div>
          <div>
            <label className="block text-gray-700 mb-2 text-lg font-semibold">작성자</label>
            <input type="text" value={currentUserName} readOnly disabled className="w-full h-12 px-4 border text-lg rounded-md bg-gray-100 text-gray-500 cursor-not-allowed"/>
          </div>
          <div>
            <label className="block text-gray-700 mb-2 text-lg font-semibold">내용</label>
            <div className="border rounded-md min-h-[340px]">
              <Editor 
                editorState={editorState} 
                onEditorStateChange={setEditorState}
                wrapperClassName="h-full" 
                editorClassName="px-4 py-2 h-full" 
                toolbarClassName="bg-gray-100" 
                placeholder="당신의 여행 후기를 입력하세요..." 
              />
            </div>
          </div>
          
          <button onClick={handleSubmit} className="w-full bg-emerald-600 text-white py-3 text-lg rounded-md hover:bg-emerald-700 transition">
            등록하기
          </button>
        </div>
      </section>
    </MainLayout>
  );
}
