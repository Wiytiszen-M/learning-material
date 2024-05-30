import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Dashboard/components/Profile";
import Settings from "./components/Dashboard/components/Settings";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />}>
        {/* if there is a default route */}
        <Route index element={<Profile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="setting" element={<Settings />} />
      </Route>
    </Routes>
  );
};
