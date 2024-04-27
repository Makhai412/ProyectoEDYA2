import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavbarComponent from "./components/navbar/NavBarComponent";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/login/SignUp";
import Home from "./pages/home/Home";

function App() {

  return (
    <main className="">
      <NavbarComponent />
      <Home />
    </main>
  );
};

export default App;
