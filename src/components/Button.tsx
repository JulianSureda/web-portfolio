/* eslint-disable react/react-in-jsx-scope */
import { ButtonProps } from "../types/ButtonProps";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Button({ text, onClick, specificConfig }: ButtonProps) {
  return (
    <div
      onClick={onClick}
      className={
        "rounded-xl flex text-white font-poppins justify-center items-center font-bold ${specificConfig} select-none"
      }
    >
      {text}
    </div>
  );
}
