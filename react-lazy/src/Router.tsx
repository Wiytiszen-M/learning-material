import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const LazyHome = lazy(() => import("./components/Home"));
const LazyAbout = lazy(() => import("./components/About"));

const Router = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<LazyHome />} />
      <Route path="/about" element={<LazyAbout />} />
    </Routes>
  </Suspense>
);

export default Router;
