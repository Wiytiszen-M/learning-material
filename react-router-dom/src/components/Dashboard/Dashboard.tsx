import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h2>Dashboard</h2>
      <Link to="setting">&#9881; - Settings</Link>
      <Link to="profile">&#128100; - profile</Link>
      <Outlet />
    </>
  );
};

export default Dashboard;
