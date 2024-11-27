/* eslint-disable react/react-in-jsx-scope */
import { ButtonProps } from "../types/ButtonProps";

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <div
      onClick={onClick}
      className={
        "h-12 w-28 ml-[5%] mt-[5%] bg-red-500 rounded-xl flex text-white font-poppins justify-center items-center font-bold ${positionConfig}"
      }
    >
      {text}
    </div>
  );
}
