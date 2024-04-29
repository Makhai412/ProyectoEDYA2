import React from 'react'
import infosalas from '../../pages/infosalas.json'
import StarsRating from './StarsRating'

export const Puntuation = ({title}) => {
  return (
    
    <div class="mt-4 font-serif sm:mt-8 lg:mt-0">
        <h1 class="text-xl font-black text-gray-900 sm:text-5xl dark:text-white">
            {title}
        </h1>
        <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
            Sinopsis
            </p>
            <div class="flex items-center gap-2 mt-2 sm:mt-0">
                <StarsRating calificacion={infosalas[0].calificacion}/>
            <p
                class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
            >
                ({infosalas[0].calificacion})
            </p>
            <a
                href="#"
                class="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
            >
                {infosalas[0].reviews} Reviews
            </a>
            </div>
        </div>
    </div>
  )
}

