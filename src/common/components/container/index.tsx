import styles from "./styles.module.scss";
import { FCC } from "@interfaces/react/fc-with-children";
import classNames from "../../utils/class-names";

interface IContainer {
  outerClassName?: string;
  innerClassName?: string;
  isFullSize?: boolean;
}
const Container: FCC<IContainer> = ({
  outerClassName,
  innerClassName,
  children,
  isFullSize = false,
}) => (
  <div
    className={classNames(
      styles.outer,
      outerClassName,
      isFullSize && styles.fullSize
    )}
  >
    <div className={classNames(styles.inner, innerClassName)}>{children}</div>
  </div>
);

export default Container;
