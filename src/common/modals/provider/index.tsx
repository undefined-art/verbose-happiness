import { FCC } from "@interfaces/react/fc-with-children";
import { ReactElement, useState } from "react";
import ModalContext from "../context";

const ModalProvider: FCC = ({ children }) => {
  const [modals, setModals] = useState<ReactElement[]>([]);

  const actions = {
    push(node: ReactElement) {
      setModals([...modals, node]);
    },
  };

  return (
    <ModalContext.Provider value={actions}>
      <>
        {modals.map((modal) => modal)}
        {children}
      </>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
