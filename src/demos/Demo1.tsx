import { Button } from '@mui/material';
import { useRequest } from 'ahooks';
import Mock from 'mockjs';

const Demo1: React.FC = () => {
  const { data, params, loading, run } = useRequest<{ text: string; time: number }>(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          text: Mock.mock('@paragraph'),
          time: new Date().getTime(),
        });
      }, 3000);
    });
  });

  console.log('%c params:', 'color: red', params);
  return (
    <>
      <Button variant='contained' onClick={run}>
        Click
      </Button>
      <div className='text-[red]'> {loading && 'loading'}</div>
      <p>{data?.time}</p>
      <p>{data?.text}</p>
    </>
  );
};

export default Demo1;
