import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard, Login, NotFound } from "./pages";
import User from "./pages/Dashboard/User";
import UserDetails from "./pages/Dashboard/UserDetails";
import "./style/App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index path="/users" element={<User />} />
          <Route index path="/users/<int>" element={<UserDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
