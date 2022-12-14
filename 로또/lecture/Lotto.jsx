import React, { useState, useRef, useEffect, useCallback } from "react";
import Ball from "./Ball";

function getWinNumbers() {
  console.log("getWinNumbers");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  const [winNums, setWinNums] = useState(getWinNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setbonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  const onClickRedo = useCallback(() => {
    console.log(winNums);
    setWinNums(getWinNumbers);
    setWinBalls([]);
    setbonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [winNums]);

  useEffect(() => {
    console.log("useEffect");
    for (let i = 0; i < winNums.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevWinBalls) => {
          return [...prevWinBalls, winNums[i]];
        });
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setbonus(winNums[6]);
      setRedo(true);
    }, 7000);
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]);

  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => (
          <Ball key={v} number={v} />
        ))}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={onClickRedo}>한 번 더!</button>}
    </>
  );
};

export default Lotto;
