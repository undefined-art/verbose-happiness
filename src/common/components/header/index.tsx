import useModal from "@hooks/use-modal";
import { Link, NavLink } from "react-router-dom";
import Modal from "../../modals/base";
import { ReactComponent as LogoIcon } from "../../../assets/icons/logo.svg";
import { ReactComponent as PersonIcon } from "../../../assets/icons/person.svg";
import { ReactComponent as AdjustmentsIcon } from "../../../assets/icons/adjustments.svg";
import styles from "./styles.module.scss";
import Container from "@components/container";

const Header = () => {
  const { open } = useModal();

  const onClick = () => open(<Modal />);

  return (
    <header>
      <Container innerClassName={styles.inner} outerClassName={styles.outer}>
        <div className={styles.logo}>
          <Link to="/">
            <LogoIcon />
          </Link>
        </div>

        <div className={styles.navigation}>
          <NavLink to="/docs">Docs</NavLink>

          <PersonIcon onClick={onClick} />
          <AdjustmentsIcon />
        </div>
      </Container>
    </header>
  );
};

export default Header;
