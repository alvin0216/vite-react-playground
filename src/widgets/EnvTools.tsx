import { Collapse } from 'antd';
import ManagerConfigJson from './ManagerConfigJson';
import ManagerSMBInfo from './ManagerSMBInfo';
import { CollapseProps } from 'antd/lib';
import ManagerHypothesis from './ManagerHypothesis';
import ManagerMachineInfo from './ManagerMachineInfo';

const items: CollapseProps['items'] = [
  {
    key: 'configJson',
    label: 'config.json',
    children: <ManagerConfigJson />,
  },
  {
    key: 'machineInfo',
    label: 'machineInfo',
    children: <ManagerMachineInfo />,
  },
  {
    key: 'smbInfo',
    label: 'smbInfo.json',
    children: <ManagerSMBInfo />,
  },
  {
    key: 'hypothesis',
    label: 'hypothesis.config',
    children: <ManagerHypothesis />,
  },
];

const EnvTools: React.FC = () => {
  return <Collapse defaultActiveKey={['smbInfo']} items={items} />;
};

export default EnvTools;
