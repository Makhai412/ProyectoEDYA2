import { DarkThemeToggle } from "flowbite-react";
import NavbarComponent from "./components/navbar/NavBarComponent";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/login/SignUp";
import { MenuComponent } from "./components/shared/MenuComponent"

function App() {

  return (

    <main className="">
      <NavbarComponent />
      <MenuComponent />
      <MenuComponent />
    </main>
  );
}

export default App;
