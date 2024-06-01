import React from "react";

type ActionType = "INCREMENT" | "DECREMENT";

const ComponentOne = () => {
  const [count, setCount] = React.useState(0);
  const handleAction = (action: ActionType) => {
    if (action === "INCREMENT") {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <>
      <h2>ComponentOne</h2>
      <button onClick={() => handleAction("DECREMENT")} role="button">
        -
      </button>
      <span data-testid="count">count is {count}</span>
      <button onClick={() => handleAction("INCREMENT")}> + </button>
    </>
  );
};

export default ComponentOne;
