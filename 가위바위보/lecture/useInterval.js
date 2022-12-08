import { useRef, useEffect } from "react";

function useInterval(callback, delay) {
  const savedCallback = useRef();
  // 바뀌는 것이 callback과 delay
  // callback: 계속 갱신시킬 함수
  // delay: callback을 갱신시킬 도구

  useEffect(() => {
    savedCallback.current = callback;
    // 처음 렌더링 되면 callback이 Ref에 담김.
    // Ref에 의해 상태가 계속 추적됨.
  });

  // delay가 바뀌면 실행
  useEffect(() => {
    function tic() {
      savedCallback.current();
    } // 최신 콜백 전달용 드랍쉽

    if (delay !== null) {
      let id = setInterval(tic, delay);
      return () => clearInterval(id);
    }
  }, [delay]);

  return savedCallback.current;
}

export default useInterval;
