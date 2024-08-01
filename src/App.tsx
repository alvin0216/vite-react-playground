import { atom, selector, useRecoilValue, useSetRecoilState } from 'recoil';
import { useEventTarget } from 'ahooks';
import { Suspense } from 'react';

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

const countState = selector({
  key: 'lastest',
  get: async ({ get }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(get(todoState).length);
      }, 3000);
    }) as Promise<number>
    return get(todoState).length;
  },
});

const Count = () => {
  const count = useRecoilValue(countState);

  return <div>Count {count}</div>;
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
      <Suspense fallback='loading..............'>
        <Count />
      </Suspense>
    </>
  );
};

export default App;
