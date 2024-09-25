import { FC, useRef, useState } from 'react';

import { useMount } from 'ahooks';

const TextBox: FC<{ text: string }> = ({ text }) => {
  const ref = useRef<HTMLDivElement>(null);

  useMount(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <div ref={ref} className='message h-80 mb-4 bg-slate-400'>
      TextBox: {text}
    </div>
  );
};

const App = () => {
  const [list, setList] = useState<string[]>([]);

  return (
    <div>
      <button onClick={() => setList((pre) => [...pre, String(pre.length)])}>add</button>

      <div className='m-auto mt-2 w-100 h-120 border border-solid border-red-900 flex flex-col-reverse overflow-y-auto'>
        <div>
          {list.map((t) => (
            <TextBox key={t} text={t} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default App;
