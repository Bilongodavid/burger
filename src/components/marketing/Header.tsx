import Logo from "../../assets/svg/Logo-burger-house.svg";
import Icon from "../../assets/svg/ico-bag-clickAndCollect.svg";
import Button from "../elements/Button";

export default function Header() {
  return (
    <div className="flex items-center justify-between pt-6">
      <div className="w-full">
        <img src={Logo} alt="Burger logo app" className="w-64" />
      </div>
      <div className="w-full text-secondary">
        <div className="flex items-center justify-end">
          <img src={Icon} alt="" className="w-5 h-5 mr-1" />
          <span>Commandez votre repas en ligne</span>
        </div>
        <div className="flex items-center justify-end">
          <Button className="bg-primary hover:bg-secondary mr-4">
            Inscription
          </Button>
          <Button className="bg-secondary hover:bg-primary"> Connexion</Button>
        </div>
      </div>
    </div>
  );
}
