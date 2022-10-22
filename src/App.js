import React from "react";
import { Beranda } from "./components/Beranda";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ManajemenBuku } from "./components/ManajemenBuku";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Beranda />} />
          <Route path="/manajemen-buku" element={<ManajemenBuku />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
