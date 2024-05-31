import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [count, setCount] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (count === 0) {
    navigate("/");
  }

  return (
    <>
      <h1>NotFound</h1>
      <p>Redirecting to Home on: {count}</p>
    </>
  );
};

export default NotFound;
