import { useLocalStorageState } from 'ahooks';
import { defaultCmdList } from './cmdList';
import { ProList } from '@ant-design/pro-components';
import TerminalIcon from '../../components/Icons/TerminalIcon';
import PannelLeft from './PannelLeft';
import { Key, useState } from 'react';
import PannelRight from './PannelRight';
import { produce } from 'immer';
import './styles.css';

const CommandTools: React.FC = () => {
  // const [cmdList, setCmdList] = useLocalStorageState('cmdList', { defaultValue: defaultCmdList });

  const [cmdList, setCmdList] = useState<CmdItem[]>(defaultCmdList);
  const [expandedRowKeys, setExpandedRowKeys] = useState<readonly Key[]>([]);

  console.log('%c 111:', 'color: red', cmdList);
  return (
    <ProList<CmdItem>
      rowKey='id'
      headerTitle='Command List'
      className='command-list'
      dataSource={cmdList}
      onDataSourceChange={setCmdList}
      expandable={{ expandedRowKeys, onExpandedRowsChange: setExpandedRowKeys }}
      onChange={(...args) => {
        console.log('%c onChange:', 'color: red', args);
      }}
      editable={{
        onSave: async (key, record) => {
          setCmdList(
            produce(cmdList!, (draft) => {
              const target = draft.find((c) => c.id === key);
              if (target) {
                const regex = /\[(.*?)\]/g;
                const vars: { [key: string]: string } = {};
                record.template.match(regex)?.forEach((k) => {
                  vars[k] = target.variables[k] || '';
                });
                console.log(vars, record.template);
                target.variables = vars;
              }
            })
          );
          return true;
        },
      }}
      metas={{
        title: { dataIndex: 'title' },
        subTitle: { dataIndex: 'subTitle' },
        avatar: { render: () => <TerminalIcon />, editable: false },
        actions: {
          render: (text, row, index, action) => [
            <a onClick={() => action?.startEditable(row.id)} key='link'>
              编辑
            </a>,
          ],
        },
        content: {
          dataIndex: 'variables',
          editable: false,
          render: (text, row) => (
            <>
              {row.template}
              <p> {JSON.stringify(row.variables)}</p>
              <PannelRight key={row.template} row={row} />
            </>
          ),
        },
        description: {
          dataIndex: 'template',
          fieldProps: { placeholder: 'Please enter template string' },
          render: (text, row) => <PannelLeft row={row} />,
        },
      }}
    />
  );
};

export default CommandTools;
