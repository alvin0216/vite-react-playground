import { Card } from 'antd';
import { StoreContext, useInitialStore } from './contexts/storeContext';
import EnvTools from './widgets/EnvTools';
import Tools from './widgets/tools';
import CommandHelper from './widgets/CommandHelper/CommandHelper';

const App: React.FC = () => {
  const ctx = useInitialStore();
  return (
    <StoreContext.Provider value={ctx}>
      <div className='container mx-auto'>
        <Card title='CommandHelper'>
          <CommandHelper />
        </Card>

        <Card title='Tools'>
          <Tools />
        </Card>
        <Card title='xxx'>
          <EnvTools />
        </Card>
      </div>
    </StoreContext.Provider>
  );
};

export default App;
