declare interface StoreState {
  smbInfo?: {
    [key: string]: string;
  };
  hypothesis?: object;
  envConfig?: object;
  betaEnvConfig?: object;
}

type SetState<S extends Record<string, any>> = <K extends keyof S>(
  state: Pick<S, K> | null | ((prevState: Readonly<S>) => Pick<S, K> | S | null)
) => void;

type StoreCTX = [StoreState, SetState<StoreState>];
