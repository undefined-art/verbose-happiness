import { FCC } from "../../interfaces/react/fc-with-children";
import styles from "./styles.module.scss";

const Layout: FCC = ({ children }) => {
  return <div className={styles.layoutWrapper}>{children}</div>;
};

export default Layout;
