import { useEventListener } from 'ahooks';
import { Button } from 'antd';

const IframeB: React.FC = () => {
  useEventListener('message', (e) => {
    console.log('%c IframeB:', 'color: red', e);
  });

  return (
    <h1>
      <Button
        type='primary'
        onClick={() => {
          parent.postMessage({ from: 'ifrmaeB', msg: 'message from IframB' }, '*');
        }}>
        PostMessage 发送到 IframeA
      </Button>

      <iframe
        // height	iframe的高度，默认150px
        height={160}
        src='http://localhost:5175/iframeC'
        className='w-full border-0'
        onLoad={(e) => {
          console.log('%c 加载完成:', 'color: red', e);
        }}
      />
    </h1>
  );
};

export default IframeB;
