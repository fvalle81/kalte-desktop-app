import { createContext, useContext } from 'react';

const ConfigContext = createContext(null);

export function useConfig() {
  return useContext(ConfigContext);
}

export default ConfigContext;
