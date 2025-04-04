import Todo from './Todo';
import Done from './Done';

type Props = {
  todos: string[];
  dones: string[];
  onComplete: (todo: string) => void;
};

export default function List({ todos, dones, onComplete }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto py-8">
      {/* TO DO */}
      <div>
        <h2 className="text-sm font-semibold bg-lime-400 text-green-800 px-3 py-1 rounded-full inline-block mb-4">
          TO DO
        </h2>
        <div className="flex flex-col gap-3">
          {todos.map((todo, index) => (
            <Todo key={index} text={todo} onComplete={onComplete} />
          ))}
        </div>
      </div>

      {/* DONE */}
      <div>
        <h2 className="text-sm font-semibold bg-green-800 text-yellow-300 px-3 py-1 rounded-full inline-block mb-4">
          DONE
        </h2>
        <div className="flex flex-col gap-3">
          {dones.map((done, index) => (
            <Done key={index} text={done} />
          ))}
        </div>
      </div>
    </div>
  );
}
