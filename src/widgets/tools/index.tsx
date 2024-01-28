import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { EditableProTable, ProCard, ProFormField } from '@ant-design/pro-components';
import { mock } from 'mockjs';
import { Button, Form, Typography, Table } from 'antd';
import React, { useRef, useState } from 'react';
import CustomizePannel from '../CommandHelper/CustomizePannel';

const { Paragraph } = Typography;

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

type DataSourceType = {
  id: React.Key;
  title: string;
  template: string;
  variables?: string[];
};

const defaultData: DataSourceType[] = [
  {
    id: mock('@guid'),
    title: 'asdk',
    template: 'git diff [tagA] [tagB] -- . "!package-lock.json"',
  },
  {
    id: mock('@guid'),
    title: 'asdk2',
    template: 'xx',
  },
];

const CustomizeSN: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>([]);
  const [form] = Form.useForm();
  const handleCreate = () => actionRef.current?.addEditRecord?.({ id: mock('@guid'), sn: '', desc: '' });

  console.log(321, Table.EXPAND_COLUMN);
  const columns: ProColumns<DataSourceType>[] = [
    {
      title: 'Title',
      dataIndex: 'title',
      width: '20%',
      formItemProps: { rules: [{ required: true }] },
    },
    {
      title: 'Template',
      dataIndex: 'template',
      valueType: 'code',

      formItemProps: { rules: [{ required: true }] },
      width: '30%',
    },
    {
      title: 'Operation',
      valueType: 'option',
      width: 250,
      render: (text, record, _, action) => [
        <a
          key='editable'
          onClick={() => {
            action?.startEditable?.(record.id);
          }}>
          编辑
        </a>,
        <a
          key='delete'
          onClick={() => {
            const tableDataSource = form.getFieldValue('table') as DataSourceType[];
            form.setFieldsValue({
              table: tableDataSource.filter((item) => item.id !== record?.id),
            });
          }}>
          移除
        </a>,
      ],
    },
  ];

  return (
    <>
      <EditableProTable<DataSourceType>
        rowKey='id'
        scroll={{ x: 960 }}
        actionRef={actionRef}
        headerTitle={[
          <Button key='create' type='primary' onClick={handleCreate} icon={<PlusOutlined />}>
            Create a new one
          </Button>,
        ]}
        maxLength={5}
        // 关闭默认的新建按钮
        recordCreatorProps={false}
        columns={columns}
        request={async () => ({ data: defaultData, total: 3, success: true })}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          form,
          editableKeys,
          onSave: async () => {
            await waitTime(400);
          },
          onChange: setEditableRowKeys,
          actionRender: (row, config, dom) => [dom.save, dom.cancel, dom.delete],
        }}
        expandable={{
          indentSize: 1500,
          // expandIcon: ({ expanded, onExpand, record }) => null,
          // expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.title}</p>,
          expandedRowRender: (record) => <CustomizePannel />,
        }}
      />

      <ProCard title='List' headerBordered collapsible defaultCollapsed>
        <ProFormField
          ignoreFormItem
          fieldProps={{ style: { width: '100%' } }}
          mode='read'
          valueType='jsonCode'
          text={JSON.stringify(dataSource)}
        />
      </ProCard>
    </>
  );
};

export default CustomizeSN;
