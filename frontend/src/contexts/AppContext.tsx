import { createContext, useContext, useState } from "react";
import Toast from "../components/Toast";
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
  const [toast, setToast] = useState<ToastMessage | undefined>(undefined);
  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          setToast(toastMessage);
        },
      }}
    >
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(undefined)}
        />
      )}
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContextProps;
};
