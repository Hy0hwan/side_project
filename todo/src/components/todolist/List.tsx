import Todo from './Todo';
import Done from './Done';

export default function List() {
  const todos = ['비타민 챙겨 먹기', '맥주 마시기', '운동하기'];
  const dones = ['은행 다녀오기', '비타민 챙겨 먹자'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto py-8">
      {/* TO DO */}
      <div>
        <h2
          className="text-sm font-semibold bg-lime-400 px-3 py-1 rounded-full inline-block mb-4"
          style={{ color: '#15803D' }}
        >
          TO DO
        </h2>
        <div className="flex flex-col gap-3">
          {todos.map((todo, index) => (
            <Todo key={index} text={todo} />
          ))}
        </div>
      </div>

      {/* DONE */}
      <div>
        <h2
          className="text-sm font-semibold bg-green-800 px-3 py-1 rounded-full inline-block mb-4"
          style={{ color: '#FCD34D' }}
        >
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
