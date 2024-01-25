import { Collapse } from 'antd';
import ManagerConfigJson from './ManagerConfigJson';
import ManagerSMBInfo from './ManagerSMBInfo';
const { Panel } = Collapse;

const EnvTools: React.FC = () => {
  return (
    <Collapse defaultActiveKey={['configJson,smbInfo']}>
      <Panel key='configJson' header='config.json'>
        <ManagerConfigJson />
      </Panel>
      <Panel key='smbInfo' header='smbInfo.json'>
        <ManagerSMBInfo />
      </Panel>
    </Collapse>
  );
};

export default EnvTools;
