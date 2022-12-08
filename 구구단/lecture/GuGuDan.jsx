const React = require("react");
const ReactDom = require("react-dom");

const GuGuDan = () => {
  const [first, setFrist] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");
  const inputRef = React.useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult((prevResult) => {
        return "정답: " + value;
      });
      setFrist(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("땡");
      setValue("");
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <div>
        {first} 곱하기 {second}
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          type="number"
          ref={inputRef}
          onChange={onChangeInput}
          value={value}
        />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </React.Fragment>
  );
};

module.exports = GuGuDan;
