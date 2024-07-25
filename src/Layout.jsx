import { useState } from "react";

import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import { Outlet } from "react-router-dom";

function Layout() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <NavBar/>
        <Outlet/>
      </main>
    </>
  );
}

export default Layout;
