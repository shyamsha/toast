import React, { createContext, ReactNode, useEffect, useState } from "react";
import { Container } from "./style";

interface ChildrenProps {
  children: ReactNode;
}

interface ToastSchema {
  type: "INFO" | "WARNING" | "SUCCESS" | "ERROR";
  message: string;
}

const ToastContext = createContext<
  React.Dispatch<React.SetStateAction<ToastSchema | undefined>>
>(() => {});

const ToastProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [toast, setToast] = useState<ToastSchema | undefined>();
  useEffect(() => {
    if (toast) {
      const timeoutId = setTimeout(() => setToast(undefined), 2000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [toast]);
  return (
    <ToastContext.Provider value={setToast}>
      {children}
      {toast && <Container type={toast.type}>{toast.message}</Container>}
    </ToastContext.Provider>
  );
};

export { ToastProvider, ToastContext };
