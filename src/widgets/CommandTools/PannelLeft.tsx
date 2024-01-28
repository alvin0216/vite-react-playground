import { ProFormField } from '@ant-design/pro-components';

interface PannelLeftProps {
  row: CmdItem;
}

const PannelLeft: React.FC<PannelLeftProps> = ({ row }) => {
  return (
    <div>
      <div className='mb-1 font-600'>Command Template</div>
      <ProFormField ignoreFormItem mode='read' valueType='jsonCode' text={row.template} />
      <div className='mt-2 mb-1 font-600'>Executed command line</div>
      <ProFormField ignoreFormItem mode='read' valueType='jsonCode' text={row.template} />
    </div>
  );
};

export default PannelLeft;
