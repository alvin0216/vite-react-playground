import { ProDescriptions, ProList } from '@ant-design/pro-components';

import { Key, useState } from 'react';
import CustomizePannel from './CustomizePannel';
import Root from '.';
import { Descriptions, Input } from 'antd';

const defaultData = [
  {
    id: '1',
    name: '语雀的天空',
    image: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
    subTitle: 'xssa',
  },
  {
    id: '2',
    name: 'Ant Design',
    image: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    id: '3',
    name: '蚂蚁金服体验科技',
    image: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
  {
    id: '4',
    name: 'TechUI',
    image: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    desc: '我是一条测试的描述',
  },
];

type DataItem = (typeof defaultData)[number];

const CommandHelper = () => {
  const [dataSource, setDataSource] = useState<DataItem[]>(defaultData);
  const [expandedRowKeys, setExpandedRowKeys] = useState<readonly Key[]>([]);

  // return <CustomizePannel />;

  return (
    <>
      <ProList<DataItem>
        expandable={{ expandedRowKeys, onExpandedRowsChange: setExpandedRowKeys }}
        rowKey='id'
        headerTitle='基础列表'
        dataSource={dataSource}
        showActions='hover'
        editable={{
          onSave: async (key, record, originRow) => {
            console.log(key, record, originRow);
            return true;
          },
        }}
        onDataSourceChange={setDataSource}
        metas={{
          title: { dataIndex: 'name' },
          avatar: { dataIndex: 'image', editable: false },
          description: {
            dataIndex: 'template',
            valueType: 'code',
            fieldProps: { placeholder: 'Please Input shell template' },
            render: () => (
              <>
                <ProDescriptions
                  column={1}
                  layout='horizontal'
                  dataSource={{
                    template: 'cd [repo]\ngit diff [tagA] [tagB] -- . ":!package.json" > [repo]/[v1]-[v2].diff',
                  }}
                  columns={[
                    {
                      valueType: 'code',
                      title: 'Template',
                      dataIndex: 'template',
                    },
                    {
                      valueType: 'code',
                      title: 'ShellCommand',
                      dataIndex: 'template',
                      copyable: true,
                    },
                  ]}
                />
              </>
            ),
          },
          content: {
            editable: false,
            render: () => <CustomizePannel />,
          },
          subTitle: {},
          actions: {
            render: (text, row, index, action) => [
              <a
                onClick={() => {
                  action?.startEditable(row.id);
                }}
                key='link'>
                编辑
              </a>,
            ],
          },
        }}
      />
    </>
  );
};

export default CommandHelper;
