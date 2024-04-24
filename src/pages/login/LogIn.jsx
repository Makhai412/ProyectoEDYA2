import React from 'react'

const LogIn = () => {
  return (
    <form class='flex justify-center p-8'>
    <div class="max-w-md w-full">
        <label for="inicio_sesion" class="block mb-4 text-4xl font-black text-gray-900 dark:text-white">Iniciar Sesión</label>
        <div class="mb-6">
            <label for="email" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Correo Electrónico</label>
            <input type="email" id="email" class="bg-red-50 border border-red-300 text-gray-900 text-base rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="juan.rodriguez@company.com" required />
        </div> 
        <div class="mb-6">
            <label for="password" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Contraseña</label>
            <input type="password" id="password" class="bg-red-50 border border-red-300 text-gray-900 text-base rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="•••••••••" required />
        </div> 
        <button type="submit" class="text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 w-full">Ingresar</button>
    </div>
    </form>


  )
}

export default LogIn;

/*
 <form class='flex p-8 justify-center '>
    <label for="inicio_sesion" class="block mb-4 text-xl font-extrabold  text-gray-900 dark:text-white">Iniciar Sesión</label>
    <div class=" p-2  grid gap-6 mb-6 md:grid-cols-1 w-full md:w-auto mt-4">
        <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo Electrónico</label>
            <input type="email" id="email" class="bg-red-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="juan.rodriguez@company.com" required />
        </div> 
        <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
            <input type="password" id="password" class="bg-red-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="•••••••••" required />
        </div> 
    </div>
    <button type="submit" class="text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Ingresar</button>
    </form>
*/