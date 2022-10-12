import { createContext, ReactElement } from "react";

const ModalContext = createContext({
  push(node: ReactElement): void {},
});

export default ModalContext;
