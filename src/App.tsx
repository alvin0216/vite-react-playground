import { useEffect, useState } from 'react';

import { Button } from 'antd';
import { useMount } from 'ahooks';

let controller = new AbortController();
const App: React.FC = () => {
  const [streaming, setStreaming] = useState(false);
  const [streamText, setStreamText] = useState('');
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
    controller = new AbortController();
    fetch('http://127.0.0.1:5200/stream', { signal: controller.signal })
      .then((response) => {
        const reader = response.body?.getReader();

        if (reader) {
          // 获取 reader

          // 读取数据
          return reader.read().then(function process({ done, value }) {
            if (done) {
              console.log('Stream finished');
              setStreaming(false);
              return;
            }
            const decoder = new TextDecoder('utf-8');
            const text = decoder.decode(value, { stream: true });
            setStreamText(text);

            // 读取下一段数据
            return reader.read().then(process);
          });
        }
      })
      .catch((e) => {
        setStreaming(false);
        if (e.name === 'AbortError') {
          console.log('abort');
        }
      });
  };

  useMount(run);

  const pause = () => {
    setPaused(true);
    controller.abort();
  };

  return (
    <>
      <div className='flex space-x-4'>
        <Button type='primary' onClick={run}>
          run
        </Button>
        <Button type='primary' onClick={() => setStreamText((pre) => pre + mockText)}>
          setStreamText
        </Button>

        <Button type='primary' onClick={() => setStreamText((pre) => pre + pre)}>
          setStreamText Long
        </Button>

        <Button type='primary' disabled={!showPause} onClick={pause}>
          setPaused
        </Button>

        <Button type='primary' danger disabled={!done} onClick={run}>
          refresh
        </Button>
      </div>

      <ul>
        <li>index: {index}</li>
        <li>typing: {String(typing)}</li>
        <li>streaming: {String(streaming)}</li>
        <li>paused: {String(paused)}</li>
        <li>done: {String(done)}</li>
      </ul>

      <p>{renderText}</p>
    </>
  );
};

export default App;
