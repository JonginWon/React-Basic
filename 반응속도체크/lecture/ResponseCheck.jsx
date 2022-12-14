import React, { useRef, useState } from "react";

const Responsecheck = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작하세요.");
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef(null);
  const endTime = useRef(null);

  const onClickScreen = () => {
    if (state === "waiting") {
      setState("ready");
      setMessage("초록색이 되면 클릭하세요.");
      timeout.current = setTimeout(() => {
        setState("now");
        setMessage("지금 클릭");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000 + 2000));
    } else if (state === "ready") {
      clearTimeout(timeout.current);
      setState("waiting");
      setMessage("너무 성급하시군요.");
    } else if (state === "now") {
      endTime.current = new Date();
      setState("waiting");
      setMessage("클릭해서 시작하세요.");
      setResult((prevReult) => {
        return [...prevReult, endTime.current - startTime.current];
      });
    }
  };

  const reset = () => {
    const { result } = this.state;
    setResult([]);
  };

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>
          평균 시간:
          {result.reduce((a, b) => a + b) / result.length}ms
        </div>
        <button onClick={reset}>초기화</button>
      </>
    );
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  );
};
export default Responsecheck;
