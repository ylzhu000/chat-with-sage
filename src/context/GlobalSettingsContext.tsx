import { createContext, useState } from 'react';

type TGlobalSettings = {
  modelId: string | null;
};

type GlobalSettingsContextType = {
  globalSettings: TGlobalSettings | null;
  setGlobalSettings: React.Dispatch<
    React.SetStateAction<TGlobalSettings | null>
  >;
};

const GlobalSettingsContext = createContext<GlobalSettingsContextType>({
  globalSettings: {
    modelId: null,
  },
  setGlobalSettings: () => {},
});

function GlobalSettingsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [globalSettings, setGlobalSettings] = useState<TGlobalSettings | null>(
    null
  );

  return (
    <GlobalSettingsContext.Provider
      value={{ globalSettings, setGlobalSettings }}
    >
      {children}
    </GlobalSettingsContext.Provider>
  );
}

export { GlobalSettingsContext, GlobalSettingsContextProvider };
