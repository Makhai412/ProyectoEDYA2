import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavbarComponent from "./components/navbar/NavBarComponent";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/login/SignUp";
import Home from "./components/homecomponent/Home";
import { InMovie } from "./pages/inmovie/InMovie";
import AppRoutes from "./routes/AppRoutes";

function App() {

  return (
    <BrowserRouter>
      <main className="">
        <NavbarComponent />
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
};

export default App;
