import { Dialog } from "@headlessui/react";
import useModal from "@hooks/use-modal";

const Modal = () => {
  const { close, isModalVisible } = useModal();

  return (
    <Dialog open={isModalVisible} onClose={close}>
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button onClick={close}>Deactivate</button>
        <button onClick={close}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;
