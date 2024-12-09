interface props {
  children: React.ReactNode;
  className?: string;
}
export default function Button({ children, className }: props) {
  return (
    <div>
      <button
        className={`${className} mt-4 px-4 py-3 uppercase  text-white shadow-xl tracking-widest text-sm font-medium  transition ease-in-out duration-300`}
      >
        {children}
      </button>
    </div>
  );
}
