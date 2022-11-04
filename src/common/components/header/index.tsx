import useModal from "@hooks/use-modal";
import { Link, NavLink } from "react-router-dom";
import Modal from "../../modals/base";
import { ReactComponent as LogoIcon } from "../../../assets/icons/logo.svg";
import { ReactComponent as PersonIcon } from "../../../assets/icons/person.svg";

const Header = () => {
  const { open } = useModal();

  const onClick = () => open(<Modal />);

  return (
    <div className="container max-w-7xl h-20 mx-auto px-4 py-2 columns-2 flex justify-between items-center font-mono">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <Link to="/" className="object-fill shrink-0 flex items-center">
          <LogoIcon />
        </Link>
      </div>

      <div className="flex justify-end items-center space-x-6 text-white">
        <NavLink
          to="/docs"
          className="text-base font-medium hover:text-blue-400"
        >
          Docs
        </NavLink>

        <PersonIcon
          className="h-8 w-8 cursor-pointer hover:text-blue-400"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Header;
