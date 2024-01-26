import { Segmented } from 'antd';
import { useState } from 'react';
import CustomizeSN from './CustomizeSN';

// import CustomizeKanban from './CustomizeKanban';

interface CustomizeProps {}

const Customize: React.FC<CustomizeProps> = () => {
  const [tabKey, setTabKey] = useState('Kanban');

  return (
    <>
      <Segmented
        className='mb-4'
        value={tabKey}
        onChange={(v) => setTabKey(v as string)}
        options={[
          { label: 'Kanban', value: 'Kanban' },
          { label: 'SerialNumber', value: 'Filter' },
          { label: 'MTM', value: 'MTM' },
        ]}
      />

      {/* <CustomizeKanban /> */}
      <CustomizeSN />
    </>
  );
};

export default Customize;
