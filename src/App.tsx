import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard, Login, NotFound } from "./pages";
import "./style/App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
