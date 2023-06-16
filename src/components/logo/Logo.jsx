import logoImg from "../../img/logo/logo-icon-small.png";
const Logo = () => {
  return (
    <div className="flex w-fit flex-col content-center items-center hover:cursor-pointer">
      <img src={logoImg} alt="logo" width="40" />
      <span className="text-lg font-bold dark:text-white">VitaBoost</span>
    </div>
  );
};

export default Logo;
