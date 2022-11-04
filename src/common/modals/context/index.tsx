import { createContext, ReactElement } from "react";

const ModalContext = createContext({
  open(node: ReactElement): void {
    void node;
  },
  close(): void {},
  isModalVisible: false,
});

export default ModalContext;
