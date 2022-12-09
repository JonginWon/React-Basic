import React from "react";
import Tr from "./Tr";

const Table = ({ onClick, tabelData, dispatch }) => {
  return (
    <table>
      {Array(tabelData.length)
        .fill()
        .map((tr, i) => (
          <Tr rowIndex={i} rowData={tabelData[i]} dispatch={dispatch} />
        ))}
    </table>
  );
};

export default Table;
