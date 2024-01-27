// const [cmd, setCmd] = useState(`git diff [tagA] [tagB] -- . ':!package-lock.json'`);

// const variables = useMemo(() => {
//   const regex = /\[(.*?)\]/g;
//   return cmd.match(regex) || [];
// }, [cmd]);

import shelljs from 'shelljs';

const x = shelljs.exec(
  // 'cd /Users/guoshaowei/Desktop/code/vite-react-playground && npm run dev',
  'cd /Users/guoshaowei/Desktop/code/vite-react-playground && npm run dev',
  { async: true, silent: true }
);

setTimeout(() => {
  x.kill();
}, 6000);

x.stdout.on('data', (d) => {
  console.log('x.stdout.on', d);
});

x.stderr.on('error', (d) => {
  console.log('x.stderr.on', d);
});

x.on('message', (message) => {
  console.log('message', message);
})
  .on('exit', (code) => {
    // done
    console.log('exit', code);
  })
  .on('close', () => {
    console.log('close');
  })
  .on('error', (err) => console.log('error', err));

// x.stderr

// // 定义要执行的命令
// const command = 'ls -l';

// // 执行命令并捕获输出
// const result = shelljs.exec(command, { silent: true });

// // 打印输出作为日志
// console.log(111, result.stdout);
