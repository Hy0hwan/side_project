import EnterTodo from './todolist/EnterTodo';
import List from './todolist/List';

export default function TodoList() {
  return (
    <div className="bg-white">
      <EnterTodo />
      <div>
        <List />
      </div>
    </div>
  );
}
