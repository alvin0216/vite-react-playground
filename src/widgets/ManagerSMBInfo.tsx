import { ProForm } from '@ant-design/pro-components';
import TagEditor from '../components/TagEditor';
import SearchJson from '../components/SearchJson';
import { useStore } from '../hooks/useStore';

const ManagerSMBInfo: React.FC = () => {
  const [{ smbInfo }] = useStore();
  return (
    <>
      <ProForm layout='horizontal' submitter={false}>
        <ProForm.Item label='Offlie' name='EntryUrl' wrapperCol={{ span: 12 }} extra='WebAlwasg.'>
          <TagEditor />
        </ProForm.Item>
        <SearchJson json={smbInfo!} />
      </ProForm>
    </>
  );
};

export default ManagerSMBInfo;
