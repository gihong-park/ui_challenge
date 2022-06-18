import React from "react";
import "./style/reset.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  HomePage  from "page/homePage";
import Challenge1 from "page/challenge1/challenge1";
import Challenge2 from "page/challenge2/challenge2";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/challenge/1" element={<Challenge1 />} />
        <Route path="/challenge/2" element={<Challenge2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
