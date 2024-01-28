import { useLocalStorageState } from 'ahooks';
import { defaultCmdList } from '../../mock/cmdList';
import { ProList } from '@ant-design/pro-components';

const CommandTools: React.FC = () => {
  const [cmdList, setCmdList] = useLocalStorageState('cmdList', { defaultValue: defaultCmdList });

  return (
    <ProList<CmdItem>
      rowKey='id'
      headerTitle='Command List'
      editable={{
        onSave: async (key, record, originRow) => {
          console.log(key, record, originRow);
          return true;
        },
      }}
      dataSource={cmdList}
      onDataSourceChange={setCmdList}
      metas={{
        title: { dataIndex: 'title' },
      }}
    />
  );
};

export default CommandTools;
