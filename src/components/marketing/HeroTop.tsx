import Illustration from "../../assets/images/background/bg-food.jpg";
import Contairner from "../elements/Container";
import Header from "./Header";
import Product from "../../assets/images/heroTop/burger-hero-top.png";
import Button from "../elements/Button";

export const HeroTop = () => {
  return (
    <div className="w-full h-screen bg-primary">
      <div
        className="w-full h-full bg-repeat"
        style={{ backgroundImage: `url(${Illustration})` }}
      >
        <Contairner>
          <Header />
          <div className="w-full relative mt-24">
            <img
              src={Product}
              alt="hero-top pircture"
              className="absolute -top-64 right-4 w-7/12 z-0"
            />
            <div className="w-full h-full relative z-10 top-8">
              <h1 className="mb-4 font-semibold text-secondary">
                C'EST LE MOMENT DE GOÛTER AU BON GOÛT DES HAMBURGERS.
              </h1>
              <h2 className="text-secondary font-secondary">
                <span className="text-8xl block">BURGER</span>
                <span className="text-6xl">HOUSE</span>
                <span className="text-4xl ml-3">
                  CLICK<span className="text-red-primary">&</span>COLLECT
                </span>
              </h2>
            </div>
            <Button className="mt-11 rounded-md" color="secondery" size="big">
              Crée mon compte
            </Button>
          </div>
        </Contairner>
      </div>
    </div>
  );
};
