import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import { Outlet } from "react-router-dom";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from "./Layout";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
<Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        {/* <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  </Router>
    </>
  );
}

export default App;
