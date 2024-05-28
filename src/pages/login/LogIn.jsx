import React from 'react'
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <form className='flex justify-center p-8'>
    <div className="max-w-md w-full">
        <label for="inicio_sesion" className="block mb-4 text-4xl font-black text-gray-900 dark:text-white">Iniciar Sesión</label>
        <div className="mb-6">
            <label for="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Correo Electrónico</label>
            <input type="email" id="email" className="bg-red-50 border border-red-300 text-gray-900 text-base rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="juan.rodriguez@company.com" required />
        </div> 
        <div class="mb-6">
            <label for="password" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Contraseña</label>
            <input type="password" id="password" className="bg-red-50 border border-red-300 text-gray-900 text-base rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="•••••••••" required />
        </div> 
        <button type="submit" className="text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 w-full">Ingresar</button>
        <p>¿No tienes cuenta? <Link to='/home/signup'>Registrate</Link></p>
    </div>
    </form>


  )
}

export default LogIn;
