import { Card } from 'antd';
import EnvTools from './widgets/EnvTools';

const App: React.FC = () => {
  return (
    <div className='container mx-auto'>
      <Card title='xxx'>
        <EnvTools />
      </Card>
    </div>
  );
};

export default App;
