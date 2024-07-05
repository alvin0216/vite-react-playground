import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { useEventTarget } from 'ahooks';

const todoState = atom({ key: 'to', default: ['default'] as string[] });

const TextInput = () => {
  const [value, { onChange }] = useEventTarget({ initialValue: '' });
  const setTodoList = useSetRecoilState(todoState);

  const add = () => {
    if (value) setTodoList((prev) => [...prev, value]);
  };
  return (
    <>
      <input type='text' value={value} onChange={onChange} />
      <button onClick={add}>add</button>
    </>
  );
};

const TodoList = () => {
  const todoList = useRecoilValue(todoState);
  return (
    <ul>
      {todoList.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );
};

const Sibling = () => {
  console.log('render Sibling');
  return null;
};

const App: React.FC = () => {
  console.log('render App');
  return (
    <>
      <TextInput />
      <TodoList />
      <Sibling />
    </>
  );
};

export default App;
