import React, {FunctionComponent} from "react";

type Props = {
  value: string,
  onSquareClick: any
}

export const Square: FunctionComponent<Props> = ({ value, onSquareClick }) => {
  return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
  );
}