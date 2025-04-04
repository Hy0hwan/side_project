'use client';

import { useState } from 'react';
import EnterTodo from './todolist/EnterTodo';
import List from './todolist/List';

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([
    '비타민 챙겨 먹기',
    '맥주 마시기',
    '운동하기',
  ]);
  const [dones, setDones] = useState<string[]>([
    '은행 다녀오기',
    '비타민 챙겨 먹자',
  ]);

  //빈문자열 추가 안하기
  const addTodo = (newTodo: string) => {
    if (newTodo.trim()) setTodos((prev) => [...prev, newTodo]);
  };

  const completeTodo = (todo: string) => {
    setTodos((prev) => prev.filter((t) => t !== todo));
    setDones((prev) => [...prev, todo]);
  };

  return (
    <div className="bg-white px-4">
      <EnterTodo onAdd={addTodo} />
      <List todos={todos} dones={dones} onComplete={completeTodo} />
    </div>
  );
}
