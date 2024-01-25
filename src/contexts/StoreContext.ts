import { createContext } from 'react';
import { useSetState } from 'ahooks';

const defaultState: StoreState = {
  smbInfo: {
    LenovoSerialNumber: 'xxxx',
    MTM: 'xxxxUS',
  },
  hypothesis: undefined,
  envConfig: undefined,
  betaEnvConfig: undefined,
};

export function useInitialStore() {
  return useSetState(defaultState);
}

export const StoreContext = createContext<StoreCTX>([defaultState, () => {}]);
