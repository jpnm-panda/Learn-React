import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "bule",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>おげんきですか?</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
