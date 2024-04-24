import { DarkThemeToggle } from "flowbite-react";
import MyButton from "./components/navbar/NavBarComponent";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/login/SignUp";

function App() {
  return (

    <main className="">
      <MyButton/>
      <SignUp/>
    </main>
  );
}

export default App;
