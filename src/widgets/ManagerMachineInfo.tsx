import { ProForm, ProFormRadio } from '@ant-design/pro-components';
import DraggableTags from '../components/DraggableTag';

const ManagerMachineInfo: React.FC = () => {
  return (
    <>
      <ProForm layout='horizontal' wrapperCol={{ span: 24 }} submitter={false}>
        <ProFormRadio.Group
          radioType='button'
          fieldProps={{ buttonStyle: 'solid' }}
          label='Gaming'
          options={[
            { label: 'Gaming', value: 'http://127.0.0.1:4201/' },
            { label: 'Non Gaming', value: 'http://127.0.0.1:4200/' },
          ]}
        />
        <ProForm.Item label='Gaming'>
          <DraggableTags />
        </ProForm.Item>
      </ProForm>
    </>
  );
};

export default ManagerMachineInfo;
