import { useNavigate } from "react-router-dom";

const Button = ({
  text,
  style,
  navigateTo,
}: {
  text: string;
  style?: { padding?: string; others?: string; bg?: string };
  navigateTo?: string;
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (navigateTo) {
      return navigate(navigateTo);
    }
  };

  return (
    <button
      className={`${style?.bg ?? "bg-[#CE7C02]"} ${
        style?.padding ?? "py-[1rem] px-[1.5rem]"
      }  text-white ${style?.others}`}
      onClick={() => {
        if (navigateTo) {
          return handleNavigate();
        }
      }}
      onKeyDown={() => {
        if (navigateTo) {
          return handleNavigate();
        }
      }}
    >
      {text}
    </button>
  );
};

export default Button;
