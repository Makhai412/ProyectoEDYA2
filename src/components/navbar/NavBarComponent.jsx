import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState, useRef } from 'react'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LogIn from "../../pages/login/LogIn";
import { signOutThunk } from "../../redux/slices/auth/Thunks";
import { useSelector, useDispatch } from 'react-redux';
let customButtonTheme = {
  color: {
    primary: "bg-red-600 text-white hover:bg-white hover:text-red-600",
  },
};

const NavbarComponent = () => {

  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  }

  const { email } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar className="bg-red-700 font-serif" fluid>
        <NavbarBrand>
          <img src="/logo3.png" className="mr-3 h-6 sm:h-20" alt="Flowbite React Logo" />
          <span className="self-center text-white text-xl font-semibold">Cinema UAO </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          
          {!email ? <Button theme={customButtonTheme} onClick={() => setOpenModal(true)} color="primary">Login</Button> : <Button onClick={() => dispatch(signOutThunk())} theme={customButtonTheme} color="primary">Logout</Button> }
          
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
            <LogIn closeModal={closeModal} />     
          </Modal.Body>
          <Modal.Footer>
              
          </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavbarComponent;
