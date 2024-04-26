import { DarkThemeToggle } from "flowbite-react";
import NavbarComponent from "./components/navbar/NavBarComponent";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/login/SignUp";
import { InMovie } from "./pages/InMovie";

function App() {
  
  return (

    <main className="">
      <NavbarComponent/>
      <InMovie/>
    </main>
  );
}

export default App;
