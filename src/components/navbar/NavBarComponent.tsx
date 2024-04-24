import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";


const customButtonTheme: CustomFlowbiteTheme["button"] = {
  color: {
    primary: "bg-red-600 text-white hover:bg-white hover:text-red-600",
  },
};



 const MyButon = () => {
  return (
    <Navbar className="bg-red-700" fluid>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="/logo3.png" className="mr-3 h-6 sm:h-20" alt="Flowbite React Logo" />
        <span className="self-center text-white text-xl font-semibold">Cinema UAO </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button theme={customButtonTheme} color="primary">Login</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" className="text-white">
          Home
        </NavbarLink>
        <NavbarLink href="#" className="text-white">Cartelera</NavbarLink>
        <NavbarLink href="#" className="text-white">Categoria</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );

}

export default MyButon;
