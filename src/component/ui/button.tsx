const Button = ({
  text,
  style,
}: {
  text: string;
  style?: { padding?: string; others?: string; bg?: string };
}) => {
  return (
    <button
      className={`${style?.bg ?? "bg-[#CE7C02]"} ${
        style?.padding ?? "py-[1rem] px-[1.5rem]"
      }  text-white ${style?.others}`}
    >
      {text}
    </button>
  );
};

export default Button;
