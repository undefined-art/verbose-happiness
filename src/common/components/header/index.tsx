import useModal from "@hooks/use-modal";
import { Link, NavLink } from "react-router-dom";
import Modal from "../../modals/base";
import { ReactComponent as LogoIcon } from "../../../assets/icons/logo.svg";
import { ReactComponent as PersonIcon } from "../../../assets/icons/person.svg";
import styles from "./styles.module.scss";

const Header = () => {
  const { open } = useModal();

  const onClick = () => open(<Modal />);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <LogoIcon />
        </Link>
      </div>

      <div className={styles.navigation}>
        <NavLink to="/docs">Docs</NavLink>

        <PersonIcon onClick={onClick} />
      </div>
    </div>
  );
};

export default Header;
