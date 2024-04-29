import React from 'react'
import { useState } from 'react';
import { Badge, Button, Modal } from 'flowbite-react';
const ReservaPage = () => {

  const sillasSala = [{
    id: 1,
    reservada: false 
  }, 
  {
    id: 2,
    reservada: false 
  },
  {
    id: 3,
    reservada: false 
  },
  {
    id: 4,
    reservada: false 
  },
  {
    id: 5,
    reservada: false 
  },
  {
    id: 6,
    reservada: false 
  },
  {
    id: 7,
    reservada: false 
  },
  {
    id: 8,
    reservada: false 
  },
  {
    id: 9,
    reservada: false 
  },
  {
    id: 10,
    reservada: false 
  },
  {
    id: 11,
    reservada: false 
  },
  {
    id: 12,
    reservada: false 
  },
  {
    id: 13,
    reservada: false 
  },
  {
    id: 14,
    reservada: false 
  },
  {
    id: 15,
    reservada: false 
  },
  {
    id: 16,
    reservada: false 
  },
  {
    id: 17,
    reservada: false 
  },
  {
    id: 18,
    reservada: false 
  },
  {
    id: 19,
    reservada: false 
  },
  {
    id: 20,
    reservada: false 
  },
  {
    id: 21,
    reservada: false 
  },
  {
    id: 22,
    reservada: false 
  },
  {
    id: 23,
    reservada: false 
  },
  {
    id: 24,
    reservada: false 
  },
  {
    id: 25,
    reservada: false 
  },
  {
    id: 26,
    reservada: false 
  },
  {
    id: 27,
    reservada: false 
  }
];

  const [openModal, setOpenModal] = useState({
    open: false,
    id: null
  });

  const [sillasSalaList, setSillasSalaList] = useState(sillasSala)

  const reservarSilla = () => {
    
    setOpenModal(false);
    
    const sillaSeleccionada = sillasSalaList.find((silla) => silla.id == openModal.id);

    sillaSeleccionada.reservada = true;
    


  }

    return (
      <>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">

        <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
          <Badge color="dark" className='text-2xl justify-center'>
              Pantalla
          </Badge>
          <br></br>
        </div>
          
          <div class="grid grid-cols-5 md:grid-cols-5 gap-4">
          {
          sillasSalaList.map(
            (silla, key) => {
              return ( 
                <Badge color={!silla.reservada ? "success" : "failure"} className="justify-center" onClick={!silla.reservada  ?() => setOpenModal({
                open: true,
                id:silla.id
              }) : {}}>
                
                <svg class="w-6 h-6 text-gray-800 text-center dark:text-white" aria-hidden="true" width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                <path class="text-center" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM7.99 9a1 1 0 0 1 1-1H9a1 1 0 0 1 0 2h-.01a1 1 0 0 1-1-1ZM14 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Zm-5.506 7.216A5.5 5.5 0 0 1 6.6 13h10.81a5.5 5.5 0 0 1-8.916 3.216Z" clip-rule="evenodd"/>
                </svg>
                
              </Badge>
          )}
          )
                
                
            }
                </div>
            </div>
      </section>
      
    <Modal show={openModal.open} size="md" popup onClose={() => setOpenModal({open: false,id: null })}>
      <Modal.Header>
        Reservación
      </Modal.Header>
      <Modal.Body>
      ¿Está seguro que desea reservar esta locacion?
      </Modal.Body>
      <Modal.Footer>
      <Button color="gray" onClick={() => setOpenModal({open: false,id: null })}>
            Cancelar
          </Button>
          <Button onClick={() => reservarSilla()}>Aceptar</Button>
          
      </Modal.Footer>
    </Modal>

        </>
    );
}

export default ReservaPage;
