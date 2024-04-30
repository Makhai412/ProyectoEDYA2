import React from 'react'

const SignUp = () => {
  return (
    <form className='flex-auto p-8'>
    <label for="registrarse" className="block mb-4 text-4xl font-blackName  text-gray-900 dark:text-white">Registrarse</label>
    <div className=" flex-auto p-2  grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombres</label>
            <input type="text" id="first_name" className="bg-red-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Juan" required />
        </div>
        <div>
            <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellidos</label>
            <input type="text" id="last_name" className="bg-red-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Rodríguez" required />
        </div>
        <div>
            <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número de Teléfono</label>
            <input type="tel" id="phone" className="bg-red-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="3100000000" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        <div>
            <label for="cedula" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número de Documento</label>
            <input type="number" id="cedula" className="bg-red-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="94188604" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        <div class="mb-6">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo Electrónico</label>
            <input type="email" id="email" className="bg-red-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="juan.rodriguez@company.com" required />
        </div> 
        <div class="mb-6">
            <label for="confirm_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirme Correo Electrónico</label>
            <input type="email" id="confirm_email" className="bg-red-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="juan.rodriguez@company.com" required />
        </div> 
        <div class="mb-6">
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
            <input type="password" id="password" className="bg-red-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="•••••••••" required />
        </div> 
        <div class="mb-6">
            <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirme Contraseña</label>
            <input type="password" id="confirm_password" className="bg-red-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div>
        
    </div>

     
    <div className="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-red-300 rounded bg-red-50 focus:ring-3 focus:ring-red-300 dark:bg-red-700 dark:border-red-600 dark:focus:ring-red-600 dark:ring-offset-red-800" required />
        </div>
        <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">He leído y acepto los <a href="#" className="text-red-600 hover:underline dark:text-red-500">términos y condiciones</a>.</label>
    </div>
    <button type="submit" className="text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ringred-800">Ingresar</button>
    </form>
  )
}

export default SignUp;

