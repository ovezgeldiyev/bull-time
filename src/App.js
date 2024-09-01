import React, { useEffect} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Base/Header";
import Home from "./Home/Home";
export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}
