import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NumberBaseball from "../숫자야구/lecture/NumberBassballClass";
import RSP from "../가위바위보/lecture/RSPClass";
import Lotto from "../로또/lecture/LottoClass";

class GameMatcher extends Component {
  render() {
    let url = new URLSearchParams(this.props.location.search.slice(1));
    console.log(url.get("hello"));
    if (this.props.match.params.name === "number-baseball") {
      return <NumberBaseball />;
    } else if (this.props.match.params.name === "rock-scissors-paper") {
      return <RSP />;
    } else if (this.props.match.params.name === "lotto-generator") {
      return <Lotto />;
    }
    return <div>일치하는 게임이 없습니다.</div>;
  }
}

export default withRouter(GameMatcher);
