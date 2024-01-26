import { createContext } from 'react';
import { useSetState } from 'ahooks';
import smbInfo from '../mock/smbInfo.json';

const defaultState: StoreState = {
  smbInfo,
  hypothesis: undefined,
  envConfig: undefined,
  betaEnvConfig: undefined,
};

export function useInitialStore() {
  return useSetState(defaultState);
}

export const StoreContext = createContext<StoreCTX>([defaultState, () => {}]);
