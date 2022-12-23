import React, { Component } from "react";
import NumberBaseball from "../숫자야구/lecture/NumberBassballClass";
import RSP from "../가위바위보/lecture/RSPClass";
import Lotto from "../로또/lecture/LottoClass";

class GameMatcher extends Component {
  render() {
    if (this.props.match.params.name === "number-baseball") {
      return <NumberBaseball />;
    } else if (this.props.match.params.name === "RSP") {
      return <RSP />;
    } else if (this.props.match.params.name === "Lotto") {
      return <Lotto />;
    }
    return <div>일치하는 게임이 없습니다.</div>;
  }
}

export default GameMatcher;
