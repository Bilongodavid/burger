import Illustration from "../../assets/images/background/bg-food.jpg";
import Contairner from "../elements/Container";
import Header from "./Header";
import Product from "../../assets/images/heroTop/burger-hero-top.png";
import Button from "../elements/Button";

export const HeroTop = () => {
  return (
    <div className="w-full bg-primary">
      <div
        className="w-full h-full bg-repeat pb-40"
        style={{ backgroundImage: `url(${Illustration})` }}
      >
        <Contairner>
          <Header />
          <div className="w-full relative mt-28">
            <img
              src={Product}
              alt="hero-top pircture"
              className="absolute -top-64 right-4 w-6/12 z-0"
            />
            <div className="bg-red-primary w-40 h-40 m-auto rounded-full absolute top-40 right-80 p-3">
              <div className="h-full w-full border-2 border-white border-dashed rounded-full flex  flex-col items-center justify-center ">
                <div className="text-white text-center">
                  <span className="text-5xl block font-extrabold">
                    5<span className="text-lg">.19€</span>
                  </span>
                  <span className="tracking-widest text-sm uppercase">
                    SEULEMENT
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full h-full relative z-10 top-8">
              <h1 className="mb-4 font-semibold text-secondary">
                C'EST LE MOMENT DE GOÛTER AU BON GOÛT DES HAMBURGERS.
              </h1>
              <h2 className="text-secondary font-secondary shadowText">
                <span className="text-8xl block">BURGER</span>
                <span className="text-6xl ">HOUSE</span>
                <span className="text-4xl ml-3 ">
                  CLICK<span className="text-red-primary">&</span>COLLECT
                </span>
              </h2>
            </div>
            <Button className="mt-16" color="secondery" size="big">
              Crée mon compte
            </Button>
          </div>
        </Contairner>
      </div>
    </div>
  );
};
