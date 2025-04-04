'use client';
import { useState } from 'react';

type Props = {
  onAdd: (text: string) => void;
};

export default function EnterTodo({ onAdd }: Props) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    onAdd(input);
    setInput('');
  };

  return (
    <div className="w-full flex items-center gap-5 mt-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="할 일을 입력해주세요"
        className="flex-1 rounded-full border border-gray-800 bg-gray-100 px-4 py-2 text-sm text-gray-700 shadow-[3px_3px_0px_#0f172a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800"
      />
      <button
        type="button"
        onClick={handleAdd}
        className="flex items-center gap-1 rounded-full border border-gray-800 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 shadow-[3px_3px_0px_#0f172a] hover:brightness-95 transition"
      >
        <span className="text-lg">＋</span> 추가하기
      </button>
    </div>
  );
}
