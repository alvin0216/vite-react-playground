import { Button, Collapse } from 'antd';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

interface RootProps {}

const Root: React.FC<RootProps> = (props) => {
  return (
    <>
      <Collapse
        ghost
        items={[
          {
            key: '1',
            label: 'This is panel header 1',
            children: <p>{text}</p>,
            extra: (
              <Button
                type='link'
                onClick={(e) => {
                  e.stopPropagation();
                }}>
                Edit
              </Button>
            ),
          },
          {
            key: '2',
            label: 'This is panel header 2',
            children: <p>{text}</p>,
          },
          {
            key: '3',
            label: 'This is panel header 3',
            children: <p>{text}</p>,
          },
        ]}
      />
    </>
  );
};

export default Root;
