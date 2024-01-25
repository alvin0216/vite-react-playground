import { Card } from 'antd';
import { useEventListener } from 'ahooks';
import { useState } from 'react';

const IframeA: React.FC = () => {
  const [data, setData] = useState(null);
  useEventListener('message', (e) => {
    setData(e.data);
  });

  return (
    <Card title='IframeA' hoverable>
      <iframe
        // height	iframe的高度，默认150px
        height={160}
        // src='http://localhost:5174/iframeB'
        src='https://baidu.com'
        onError={(e) => {
          console.log('%c e:', 'color: red', e);
        }}
        className='w-full border-0'
        onLoad={(e) => {
          console.log('%c 加载完成:', 'color: red', e);
        }}
        // title 属性用于为iframe中的内容设置一个描述。虽然title 属性对iframe的用户界面没有影响，但它对可访问性很有帮助，为屏幕阅读器提供有价值的输入。
        title='A youtube video on React hooks'
        /**
         * 为了设置浏览器应如何加载iframe内容，我们将使用loading 属性；
         * loading 需要eager 或lazy 。当设置为eager ，iframe会被立即加载，即使它在可见视口之外，这是默认值。
         * lazy 会延迟加载，直到它与视口达到一个计算的距离，由浏览器定义。
         */
        loading='eager'
        allowFullScreen
      />
      {JSON.stringify(data, null, 2)}
    </Card>
  );
};

export default IframeA;
