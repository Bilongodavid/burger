import Logo from "../../assets/svg/Logo-burger-house.svg";
import Icon from "../../assets/svg/ico-bag-clickAndCollect.svg";
import Button from "../elements/Button";

export default function Header() {
  return (
    <div className="flex items-center justify-between py-6 relative z-10">
      <div className="w-full">
        <img src={Logo} alt="Burger logo app" className="w-64" />
      </div>
      <div className="w-full text-secondary">
        <div className="flex items-center justify-end">
          <img src={Icon} alt="" className="w-5 h-5 mr-1" />
          <span>Commandez votre repas en ligne</span>
        </div>
        <div className="flex items-center justify-end">
          <Button className="mr-4 tracking-widest" color="primary">
            Inscription
          </Button>
          <Button color="secondery" className="tracking-widest">
            Connexion
          </Button>
        </div>
      </div>
    </div>
  );
}
