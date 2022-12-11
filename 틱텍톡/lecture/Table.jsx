import React, { memo } from "react";
import Tr from "./Tr";

const Table = memo(({ onClick, tabelData, dispatch }) => {
  return (
    <table>
      {Array(tabelData.length)
        .fill()
        .map((tr, i) => (
          <Tr key={i} rowIndex={i} rowData={tabelData[i]} dispatch={dispatch} />
        ))}
    </table>
  );
});

export default Table;
