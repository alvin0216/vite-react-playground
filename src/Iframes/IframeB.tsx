import { Button } from 'antd';

const IframeB: React.FC = () => {
  return (
    <h1>
      <Button
        type='primary'
        onClick={() => {
          parent.postMessage({ from: 'ifrmaeB', msg: 'message from IframB' }, '*');
        }}>
        PostMessage 发送到 IframeA
      </Button>
    </h1>
  );
};

export default IframeB;
