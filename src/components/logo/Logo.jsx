import logoImg from "../../img/logo/logo-icon-small.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
      <div className="flex w-fit flex-col content-center items-center hover:cursor-pointer">
        <img src={logoImg} alt="logo" width="40" />
        <span className="text-lg font-bold">VitaBoost</span>
      </div>
    </Link>
  );
};

export default Logo;
