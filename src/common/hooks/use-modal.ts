import { useContext } from "react";
import ModalContext from "../modals/context";

const useModal = () => {
  const actions = useContext(ModalContext);

  return actions;
};

export default useModal;
