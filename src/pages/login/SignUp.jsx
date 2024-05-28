import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../../redux/slices/auth/Thunks';
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const [emailInput, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [password2, setPassword2] = useState('')
    const [validForm, setValidForm] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickRegister = (event) => {

        event.preventDefault();
        
        const list = [];
        setErrors([]);

        const validEmail = new RegExp(
            '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
         );
        
         const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

        if(password !== password2 ) {
            list.push("Las contraseñas ingresadas no coinciden")
        }

        if(!validPassword.test(password)) {
            list.push("la contraseña debe tener al menos 6 caracteres alfanumericos")
        }

        if(!validEmail.test(emailInput)) {
            list.push("El email debe tener un formato correcto")
        }

        if(list.length == 0) {
            setErrors([]);
        } else {
            setErrors(list);
        }


        if(list.length == 0) {
            dispatch(registerThunk(emailInput, password));
            navigate("/")
        }

    }

    const onSetEmail = (event) => {
        setEmail(event.target.value)
    }

    const onSetUserName = (event) => {
        setUserName(event.target.value)
    }
    
    const onSetPassword = (event) => {
        setPassword(event.target.value)
    }

    const onSetPassword2 = (event) => {
        setPassword2(event.target.value)
    }

  return (
    <form className='flex-auto p-8'>
    <label for="registrarse" className="block mb-4 text-4xl font-blackName  text-gray-900 dark:text-white">Registrarse</label>
    {
        errors.map(
          (error, key) => {
            return <p className='text-xs text-red-500'>* {error}</p>
          }
        )
      }
    <div className=" flex-auto p-2  grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombres</label>
            <input type="text"  value={userName}  onChange={(event) => onSetUserName(event)}  id="first_name" className="bg-red-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Juan" required />
        </div>
        <div class="mb-6">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo Electrónico</label>
            <input type="email"  value={emailInput}  onChange={(event) => onSetEmail(event)}  id="email" className="bg-red-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="juan.rodriguez@company.com" required />
        </div> 
        <div class="mb-6">
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
            <input type="password" value={password} onChange={(event) => onSetPassword(event)} id="password" className="bg-red-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="•••••••••" required />
        </div> 
        <div class="mb-6">
            <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirme Contraseña</label>
            <input type="password" id="confirm_password" value={password2} onChange={(event) => onSetPassword2(event)} className="bg-red-50 border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div>
        
    </div>

     
    <div className="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-red-300 rounded bg-red-50 focus:ring-3 focus:ring-red-300 dark:bg-red-700 dark:border-red-600 dark:focus:ring-red-600 dark:ring-offset-red-800" required />
        </div>
        <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">He leído y acepto los <a href="#" className="text-red-600 hover:underline dark:text-red-500">términos y condiciones</a>.</label>
    </div>
    <button type="submit" onClick={(event) => onClickRegister(event)} className="text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ringred-800">Ingresar</button>
    </form>
  )
}

export default SignUp;

