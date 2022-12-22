import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import NumberBaseball from "../숫자야구/lecture/NumberBassballClass";
import RSP from "../가위바위보/lecture/RSPClass";
import Lotto from "../로또/lecture/LottoClass";

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/number-baseball">숫자야구</Link>
        &nbsp;
        <Link to="/rock-scissors-paper">가위바위보</Link>
        &nbsp;
        <Link to="/lotto-generator">로또</Link>
      </div>
      <div>
        <Route path="/number-baseball" component={NumberBaseball} />
        <Route path="/rock-scissors-paper" componert={RSP} />
        <Route path="/lotto-generator" component={Lotto} />
      </div>
    </BrowserRouter>
  );
};

export default Games;
