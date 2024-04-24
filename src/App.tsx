import { DarkThemeToggle } from "flowbite-react";
import NavbarComponent from "./components/navbar/NavBarComponent";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/login/SignUp";

function App() {
  return (

    <main className="">
      <NavbarComponent/>
      <SignUp/>
      <LogIn/>
    </main>
  );
}

export default App;
