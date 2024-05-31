import { useParams } from "react-router-dom";

const User = () => {
  const { userId = "4" } = useParams();
  const users: { [key: string]: string } = {
    1: "John",
    2: "Jane",
    3: "Alice",
    4: "Undefined",
  };

  const userName: string = users[userId];

  return (
    <>
      <h2>User</h2>
      <p>Name: {userName}</p>
    </>
  );
};

export default User;
