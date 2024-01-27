import killPort from 'kill-port';

killPort(5173, 'tcp')
  .then((x) => {
    console.log('then', x);
  })
  .catch((x) => {
    console.log('catch', x);
  });
