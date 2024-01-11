import { createContext, useContext } from "react";
interface ToastMessage {
  message: string;
  type: "success" | "error";
}

interface AppContextProps {
  showToast: (toastMessage: ToastMessage) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          console.log(toastMessage);
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContextProps;
};
