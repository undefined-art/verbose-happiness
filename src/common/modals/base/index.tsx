import { Dialog } from "@headlessui/react";
import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import { ReactComponent as CloseIcon } from "@assets/icons/close-icon.svg";
import useModal from "@hooks/use-modal";

interface IBaseModal extends PropsWithChildren {
  title?: string;
  description?: string;
}

const BaseModal: FC<IBaseModal> = ({ title, description, children }) => {
  const { close, isModalVisible } = useModal();

  return (
    <Dialog open={isModalVisible} onClose={close} className={styles.dialog}>
      <Dialog.Panel className={styles.panel}>
        <Dialog.Title className={styles.title}>
          {title} <CloseIcon onClick={close} className={styles.close} />
        </Dialog.Title>
        {description && (
          <Dialog.Description className={styles.description}>
            {description}
          </Dialog.Description>
        )}
        {children}
      </Dialog.Panel>
    </Dialog>
  );
};

export default BaseModal;
