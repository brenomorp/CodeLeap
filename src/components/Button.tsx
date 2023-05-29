type ButtonProps = {
  children: string;
  color?: string;
  type: "button" | "submit" | "reset";
};

function Button({ children, color, type }: ButtonProps) {
  if (color === "blue") {
    return (
      <button
        type={type}
        className={`h-8 w-32 self-end rounded-lg bg-blue text-white transition-colors hover:bg-[#6187D8]`}
      >
        <span className="text-base font-bold">{children}</span>
      </button>
    );
  }
  if (color === "red") {
    return (
      <button
        type={type}
        className={`h-8 w-32 self-end rounded-lg bg-red text-white transition-colors hover:bg-[#E64646]`}
      >
        <span className="text-base font-bold">{children}</span>
      </button>
    );
  }
  if (color === "green") {
    return (
      <button
        type={type}
        className={`h-8 w-32 self-end rounded-lg bg-green text-white transition-colors hover:bg-[#3D9B51]`}
      >
        <span className="text-base font-bold">{children}</span>
      </button>
    );
  }
  return (
    <button
      type={type}
      className={`h-8 w-32 self-end rounded-lg border border-[#999] bg-white text-black transition-colors hover:bg-[#F5F5F5]`}
    >
      <span className="text-base font-bold">{children}</span>
    </button>
  );
}

export default Button;
