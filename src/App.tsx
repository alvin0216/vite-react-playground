import { useEffect, useState } from 'react';

import { Button } from 'antd';

const mockText =
  '具体来说，可以使用 JavaScript 中的 setInterval() 函数和字符串截取方法来模拟打字机效果。例如，在实现 ChatGPT 的回复效果时，可以将回复内容以字符串的形式存储在一个数组中，然后使用 setInterval() 函数定时截取字符串并更新到页面上，从而实现打字机效果。';
const App: React.FC = () => {
  const [streaming, setStreaming] = useState(false);
  const [streamText, setStreamText] = useState(mockText);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const typing = index < streamText.length && !paused;
  const done = !typing && !streaming;

  const showPause = !done;
  const renderText = streamText.slice(0, index);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (typing) {
        // console.log('typing, should scroll here...');
        setIndex((pre) => pre + 1);
      } else clearTimeout(typingTimeout);
    });
    return () => clearTimeout(typingTimeout);
  }, [typing, index]);

  const run = () => {
    setStreaming(true);
    setStreamText('');
    setPaused(false);
    setIndex(0);
    // run Error paused
  };

  return (
    <>
      <div className='flex space-x-4'>
        <Button type='primary' onClick={() => setStreamText((pre) => pre + mockText)}>
          setStreamText
        </Button>

        <Button type='primary' onClick={() => setStreamText((pre) => pre + pre)}>
          setStreamText Long
        </Button>

        <Button type='primary' disabled={!showPause} onClick={() => setPaused(true)}>
          setPaused
        </Button>

        <Button type='primary' danger disabled={!done} onClick={run}>
          refresh
        </Button>
      </div>

      <ul>
        <li>index: {index}</li>
        <li>typing: {String(typing)}</li>
        <li>paused: {String(paused)}</li>
        <li>done: {String(done)}</li>
      </ul>

      <p>{renderText}</p>
    </>
  );
};

export default App;
