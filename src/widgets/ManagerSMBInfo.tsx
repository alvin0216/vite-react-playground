import { ProForm } from '@ant-design/pro-components';
import TagEditor from '../components/TagEditor';
import SearchJson from '../components/SearchJson';
import { useStore } from '../hooks/useStore';

const ManagerSMBInfo: React.FC = () => {
  const [{ smbInfo }, setStore] = useStore();
  return (
    <>
      <ProForm layout='horizontal' wrapperCol={{ span: 24 }} submitter={false}>
        <ProForm.Item label='Serial Number' name='EntryUrl' wrapperCol={{ span: 12 }} extra='WebAlwasg.'>
          <TagEditor />
        </ProForm.Item>
        <ProForm.Item label='Serial Number' extra='manager my series number'></ProForm.Item>

        <div>CD Device</div>
        <div></div>

        <SearchJson />
      </ProForm>
    </>
  );
};

export default ManagerSMBInfo;
