import Illustration from "../../assets/images/background/bg-food.jpg";

export const HeroTop = () => {
  return (
    <div className="w-full h-screen bg-primary">
      <div
        className="w-full h-full bg-repeat"
        style={{ backgroundImage: `url(${Illustration})` }}
      ></div>
    </div>
  );
};
