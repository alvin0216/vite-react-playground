import { ProForm } from '@ant-design/pro-components';
import SearchJson from '../components/SearchJson';
import { useStore } from '../hooks/useStore';
import { AppstoreOutlined, BarsOutlined, SettingOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Badge, Button, Modal, Segmented, Space, Tooltip, Drawer } from 'antd';
import { useState } from 'react';
import clsx from 'clsx';
import { useBoolean } from 'ahooks';
import Customize from './customize';

const formItemLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 12 },
};

const ManagerSMBInfo: React.FC = () => {
  const [modalVisible, { setTrue, setFalse }] = useBoolean(false);

  const [tabKey, setTabKey] = useState('Filter');
  const [{ smbInfo }, setStore] = useStore();

  const isCDDevice = smbInfo?.mtm?.endsWith('CD');

  return (
    <>
      <Space className='mb-4'>
        <Segmented
          value={tabKey}
          onChange={(v) => setTabKey(v as string)}
          options={[
            { label: 'Kanban', value: 'Kanban', icon: <AppstoreOutlined /> },
            { label: 'Filter', value: 'Filter', icon: <BarsOutlined /> },
          ]}
        />

        <Tooltip title='Customize'>
          <Button icon={<SettingOutlined />} onClick={setTrue} />
        </Tooltip>
        <Tooltip title='Restart Service'>
          <Badge dot>
            <Button icon={<PoweroffOutlined />} />
          </Badge>
        </Tooltip>
      </Space>

      <ProForm {...formItemLayout} layout='horizontal' submitter={false}>
        <div className={clsx(tabKey === 'Kanban' ? '' : 'hidden')}>
          <ProForm.Item label='Serial Number' name='EntryUrl' addonAfter={'qixian'}></ProForm.Item>
          <ProForm.Item label='MTM'></ProForm.Item>
        </div>
      </ProForm>

      <div className={clsx(tabKey === 'Filter' ? '' : 'hidden')}>
        <SearchJson />
      </div>

      <Drawer
        title='Customize'
        open={modalVisible}
        onClose={setFalse}
        // ..
        placement='top'
        height='100vh'>
        <Customize />
      </Drawer>
    </>
  );
};

export default ManagerSMBInfo;
