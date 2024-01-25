import { Collapse } from 'antd';
import ManagerConfigJson from './ManagerConfigJson';
import ManagerSMBInfo from './ManagerSMBInfo';
import { CollapseProps } from 'antd/lib';
import ManagerHypothesis from './ManagerHypothesis';

const items: CollapseProps['items'] = [
  {
    key: 'configJson',
    label: 'config.json',
    children: <ManagerConfigJson />,
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
  return <Collapse defaultActiveKey={['configJson', 'smbInfo']} items={items} />;
};

export default EnvTools;
