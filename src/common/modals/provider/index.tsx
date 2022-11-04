import { FCC } from "@interfaces/react/fc-with-children";
import { ReactElement, useState } from "react";
import ModalContext from "../context";

const ModalProvider: FCC = ({ children }) => {
  const [modal, setModal] = useState<ReactElement | null>(null);

  const value = {
    isModalVisible: Boolean(modal),
    open(node: ReactElement) {
      setModal(node);
    },
    close() {
      setModal(null);
    },
  };

  return (
    <ModalContext.Provider value={value}>
      <>
        {modal}
        {children}
      </>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
