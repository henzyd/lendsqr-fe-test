import React from "react";
import { Route, Routes } from "react-router-dom";
import AppProvider from "./context/AppProvider";
import { Dashboard, Login, NotFound, DashboardIndex } from "./pages";
import User from "./pages/Dashboard/User";
import UserDetails from "./pages/Dashboard/UserDetails";
import "./style/App.scss";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Routes>
          <Route path="/" element={<DashboardIndex />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />}>
            <Route index path="/users" element={<User />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
