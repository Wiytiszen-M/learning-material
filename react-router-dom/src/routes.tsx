import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Dashboard/components/Profile";
import Settings from "./components/Dashboard/components/Settings";
import User from "./components/User";
import NotFound from "./components/NotFound";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/old-about" element={<Navigate to="/about" />} />
      <Route path="/dashboard" element={<Dashboard />}>
        {/* if there is a default route */}
        <Route index element={<Profile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="setting" element={<Settings />} />
      </Route>
      <Route path="/users/:userId" element={<User />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
