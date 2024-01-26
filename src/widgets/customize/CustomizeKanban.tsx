import { Transfer } from 'antd';
import { useStore } from '../../hooks/useStore';
import { useState } from 'react';

import type { TransferProps } from 'antd';

const CustomizeKanban: React.FC = () => {
  const [{ smbInfo: json }] = useStore();

  const dataSource = Object.entries(json || {}).map(([key]) => ({ key, title: key }));

  const [targetKeys, setTargetKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const onChange: TransferProps['onChange'] = (nextTargetKeys, direction, moveKeys) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange = (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const onScroll: TransferProps['onScroll'] = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };

  return (
    <>
      <Transfer
        showSearch
        listStyle={{ width: 300, height: '70vh' }}
        dataSource={dataSource}
        titles={['Source', 'Kanban']}
        targetKeys={targetKeys}
        selectedKeys={selectedKeys}
        onChange={onChange}
        onSelectChange={onSelectChange}
        onScroll={onScroll}
        render={(item) => item.title}
      />
    </>
  );
};

export default CustomizeKanban;
