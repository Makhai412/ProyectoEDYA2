import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState, useRef } from 'react'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LogIn from "../../pages/login/LogIn";

let customButtonTheme = {
  color: {
    primary: "bg-red-600 text-white hover:bg-white hover:text-red-600",
  },
};

const NavbarComponent = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Navbar className="bg-red-700 font-serif" fluid>
        <NavbarBrand href="/">
          <img src="/logo3.png" className="mr-3 h-6 sm:h-20" alt="Flowbite React Logo" />
          <span className="self-center text-white text-xl font-semibold">Cinema UAO </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button theme={customButtonTheme} onClick={() => setOpenModal(true)} color="primary">Login</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <Link to="/home" className="text-white">
            Home
          </Link>
          <Link to="/cartelera" className="text-white">Cartelera</Link>
          <Link to="/categoria" className="text-white">Categoria</Link>
        </NavbarCollapse>
      </Navbar>
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
          <Modal.Header>
            
          </Modal.Header>
          <Modal.Body>
            <LogIn/>     
          </Modal.Body>
          <Modal.Footer>
              
          </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavbarComponent;
