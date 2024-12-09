interface props {
  children: React.ReactNode;
  className?: string;
  size?: "big" | "small";
  color?: "danger" | "primary" | "secondery";
}
export default function Button({
  children,
  className,
  color = "primary",
  size,
}: props) {
  let bgColor;
  if (color === "danger") bgColor = "bg-red-primary hover:bg-red-primary-hover";
  if (color === "primary") bgColor = "bg-primary hover:bg-primary-hover";
  if (color === "secondery") bgColor = "bg-secondary hover:bg-secondary-hover";

  switch (size) {
    case "big":
      return (
        <div>
          <button
            className={`${className} ${bgColor} mt-4 px-8 py-4 uppercase  text-white shadow-xl text-base font-medium  transition ease-in-out duration-300`}
          >
            {children}
          </button>
        </div>
      );
    case "small":
      return (
        <div>
          <button
            className={`${className} ${bgColor} mt-4 px-4 py-2 uppercase  text-white shadow-xl text-xs font-medium  transition ease-in-out duration-300`}
          >
            {children}
          </button>
        </div>
      );

    default:
      return (
        <div>
          <button
            className={`${className} ${bgColor} mt-4 px-4 py-3 uppercase  text-white shadow-xl text-sm font-medium  transition ease-in-out duration-300`}
          >
            {children}
          </button>
        </div>
      );
  }
}
