import { Collapse } from 'antd';
import ManagerConfigJson from './ManagerConfigJson';
import ManagerSMBInfo from './ManagerSMBInfo';
import { CollapseProps } from 'antd/lib';

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
];

const EnvTools: React.FC = () => {
  return <Collapse defaultActiveKey={['configJson', 'smbInfo']} items={items} />;
};

export default EnvTools;
