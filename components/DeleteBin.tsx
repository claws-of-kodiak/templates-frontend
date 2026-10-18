import React from "React";
import { FaTrash } from "react-icons/fa";
import "../../styles/delete-bin.css";

type DeleteBinProps = {
  onClick: () => void;
};

export default function DeleteBin({ onClick }: DeleteBinProps) {
  return (
    <span onClick={onClick}>
      <FaTrash />
    </span>
  );
}
