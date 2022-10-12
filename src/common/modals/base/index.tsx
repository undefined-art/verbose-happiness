import { Dialog } from "@headlessui/react";
import { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => setIsOpen(false);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button onClick={onClose}>Deactivate</button>
        <button onClick={onClose}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;
