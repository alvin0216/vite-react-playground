import { Button } from 'antd';

const IframeC: React.FC = () => {
  return (
    <div>
      <h1>http://localhost:5175/iframeC</h1>
      <Button
        type='primary'
        onClick={() => {
          window.top?.postMessage({ from: 'ifrmaeC', msg: 'message from IframC' }, '*');
        }}>
        PostMessage 发送到顶层
      </Button>
    </div>
  );
};

export default IframeC;
