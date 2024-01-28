import type { ProDescriptionsActionType } from '@ant-design/pro-components';
import { ProCard, ProDescriptions } from '@ant-design/pro-components';
import { useRef, useState } from 'react';
import RcResizeObserver from 'rc-resize-observer';
import { Button, Descriptions } from 'antd';

const record = {
  id: '123456',
  template: 'cd [repo]\ngit diff [tagA] [tagB] -- . ":!package.json" > [repo]/[v1]-[v2].diff',
  variables: {
    '[repo]': '',
    '[tagA]': '',
    '[tagB]': '',
    '[v1]': '',
    '[v2]': 'vvv',
  },
};

const convertVars = () => {
  const regex = /\[(.*?)\]/g;
  const varsList = record.template.match(regex) || [];
  const variables: { [key: string]: string } = {};
  record.template.match(regex)?.forEach((k) => {
    variables[k] = 'unknown';
  });
  return [...new Set(varsList)];
};

const CustomizePannel = () => {
  const [responsive, setResponsive] = useState(false);
  const actionRef = useRef<ProDescriptionsActionType>();

  // return (
  //   <Descriptions
  //     title='User Info'
  //     layout='vertical'
  //     bordered
  //     items={[
  //       {
  //         key: '1',
  //         label: 'Template',
  //         children: <ProDescriptions />,
  //       },
  //       {
  //         key: '2',
  //         label: 'Template',
  //         children: <ProDescriptions />,
  //       },
  //     ]}
  //   />
  // );

  return (
    <ProDescriptions
      title='Environment variables'
      column={1}
      layout='horizontal'
      dataSource={record.variables}
      editable={{
        onSave: async (keypath, newInfo, oriInfo) => {
          console.log(keypath, newInfo, oriInfo);
          return true;
        },
      }}
      columns={Object.keys(record.variables).map((v) => ({ title: v, dataIndex: v }))}></ProDescriptions>
  );
  return (
    <RcResizeObserver
      key='resize-observer'
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}>
      <ProCard ghost split={responsive ? 'horizontal' : 'vertical'} headerBordered>
        <ProCard title='Command' hoverable bordered>
          <ProDescriptions<typeof record>
            column={1}
            layout='horizontal'
            actionRef={actionRef}
            dataSource={record}
            editable={{
              onSave: async (keypath, newInfo, oriInfo) => {
                console.log(keypath, newInfo, oriInfo);
                return true;
              },
            }}
            columns={[
              {
                title: 'Template',
                dataIndex: 'template',
                valueType: 'code',
                fieldProps: {},
              },
              {
                title: 'Actual command',
                dataIndex: 'actulCmd',
                editable: false,
                // copyable: true,
                valueType: 'code',
                renderText: (text, { variables, template }) => {
                  let cmd = template;
                  for (const key in variables) {
                    cmd = cmd.replace(key, variables[key] || key);
                  }
                  return cmd;
                },
              },
            ]}></ProDescriptions>
        </ProCard>
        <ProCard hoverable title='Environment variables'>
          <ProDescriptions
            column={1}
            layout='horizontal'
            dataSource={record.variables}
            editable={{
              onSave: async (keypath, newInfo, oriInfo) => {
                console.log(keypath, newInfo, oriInfo);
                return true;
              },
            }}
            columns={Object.keys(record.variables).map((v) => ({ title: v, dataIndex: v }))}></ProDescriptions>
        </ProCard>
      </ProCard>
    </RcResizeObserver>
  );
};

export default CustomizePannel;
