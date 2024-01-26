import { useState, useMemo } from 'react';
import { Typography, Alert } from 'antd';
import { useStore } from '../hooks/useStore';
import { ProFormSelect } from '@ant-design/pro-components';
import { useSetState } from 'ahooks';

const { Paragraph } = Typography;

interface SearchJsonProps {}

const SearchJson: React.FC<SearchJsonProps> = () => {
  const [keys, setKeys] = useState([]);
  const [{ smbInfo: json }] = useStore();

  const valueEnum = useMemo(() => {
    if (!json) return {};

    const kJson: { [key: string]: string } = {};

    for (const key in json) {
      kJson[key] = key;
    }
    const allKeys = Object.keys(json);
    const nKeys = keys.filter((k) => allKeys.includes(k));
    if (nKeys.toString() !== keys.toString()) {
      setKeys(nKeys);
    }
    return kJson;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [json]);

  if (!json) return null;

  return (
    <>
      <ProFormSelect
        key={Object.keys(valueEnum).join('')}
        label='Quick Search'
        valueEnum={valueEnum}
        fieldProps={{ mode: 'multiple', value: keys }}
        placeholder='input search text'
        onChange={setKeys}
        extra={
          keys.length > 0 && (
            <Alert
              key={keys.join(',')}
              className='mt-2'
              type='info'
              closable
              description={keys.map((key) => {
                return (
                  <div key={key} className='flex mb-1'>
                    <div className='mr-4'>{key}:</div>
                    <Paragraph editable={{}} copyable className='!mb-0 '>
                      {json[key]}
                    </Paragraph>
                  </div>
                );
              })}
            />
          )
        }
      />
    </>
  );
};

export default SearchJson;
