import { useState } from "react";

const ComponentOne = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((prev: number) => prev + 1);
  };
  return (
    <>
      <h1>ComponentOne</h1>
      <button onClick={handleClick}> + </button>
      <div>Count is {count}</div>
      <button onClick={handleClick}> - </button>
    </>
  );
};

export default ComponentOne;
