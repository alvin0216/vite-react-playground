import { Card } from 'antd';
import { StoreContext, useInitialStore } from './contexts/storeContext';
import EnvTools from './widgets/EnvTools';

const App: React.FC = () => {
  const ctx = useInitialStore();
  return (
    <StoreContext.Provider value={ctx}>
      <div className='container mx-auto'>
        <Card title='xxx'>
          <EnvTools />
        </Card>
      </div>
    </StoreContext.Provider>
  );
};

export default App;
