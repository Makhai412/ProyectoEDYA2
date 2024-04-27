import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState, useRef } from 'react'
import LogIn from "../../pages/login/LogIn";

let customButtonTheme = {
  color: {
    primary: "bg-red-600 text-white hover:bg-white hover:text-red-600",
  },
};



const NavbarComponent = () => {

  const [openModal, setOpenModal] = useState(false);
  //const emailInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Navbar className="bg-red-700" fluid>
        <NavbarBrand href="https://flowbite-react.com">
          <img src="/logo3.png" className="mr-3 h-6 sm:h-20" alt="Flowbite React Logo" />
          <span className="self-center text-white text-xl font-semibold">Cinema UAO </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button theme={customButtonTheme} onClick={() => setOpenModal(true)} color="primary">Login</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="/home" className="text-white">
            Home
          </NavbarLink>
          <NavbarLink href="#" className="text-white">Cartelera</NavbarLink>
          <NavbarLink href="#" className="text-white">Categoria</NavbarLink>
        </NavbarCollapse>
      </Navbar>

      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <LogIn></LogIn>
        </Modal.Body>
      </Modal>
    </>
  );

}

export default NavbarComponent;
