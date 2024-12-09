import Illustration from "../../assets/images/background/bg-food.jpg";
import Contairner from "../elements/Container";
import Header from "./Header";

export const HeroTop = () => {
  return (
    <div className="w-full h-screen bg-primary">
      <div
        className="w-full h-full bg-repeat"
        style={{ backgroundImage: `url(${Illustration})` }}
      >
        <Contairner>
          <Header />
        </Contairner>
      </div>
    </div>
  );
};
