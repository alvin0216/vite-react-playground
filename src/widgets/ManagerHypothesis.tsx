import { ProForm } from '@ant-design/pro-components';
import TagEditor from '../components/TagEditor';

const ManagerHypothesis: React.FC = () => {
  return (
    <>
      <ProForm layout='horizontal' submitter={false}>
        <ProForm.Item label='Offlie' name='EntryUrl' wrapperCol={{ span: 12 }} extra='WebAlwasg.'>
          <TagEditor />
        </ProForm.Item>
      </ProForm>
    </>
  );
};

export default ManagerHypothesis;
