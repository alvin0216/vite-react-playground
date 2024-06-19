import React, { Suspense, lazy, memo, useMemo } from 'react';

const RemoteLite: React.FC = memo(() => {
  const Remote = useMemo(
    () =>
      lazy(async () => {
        const text = await fetch('https://alvin-cdn.oss-cn-shenzhen.aliyuncs.com/share/Button.umd.js').then((r) => {
          return r.text();
        });

        const getParsedModule = (code: string) => {
          const module = { exports: {} };
          const packages = { react: React } as any;
          const require = (name: string) => packages[name];
          new Function('require, exports, module', code)(require, module.exports, module);
          return module;
        };
        const module = getParsedModule(text);

        return { default: module.exports as React.ComponentType<any> };
      }),
    []
  );

  return (
    <Suspense fallback='loading...'>
      <Remote />
    </Suspense>
  );
});

export default RemoteLite;
