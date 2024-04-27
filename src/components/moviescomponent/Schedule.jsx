import React from 'react'

export const Schedule = ({pelicula}) => {
  return (
    <div class="flex justify-center items-center font-serif ">
        <div class="text-center">
            <h2 class="text-xl font-extrabold text-gray-900 sm:text-2xl dark:text-white">Horario de {pelicula.nombre}</h2>
            <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
            <ul class="space-y-4 text-sm">
            {pelicula.horario.map((horario, index) => (
                <li key={index}>
                <p class="mb-2 text-gray-700 dark:text-gray-400">Fecha: {horario.fecha}</p>
                <p class="mb-2 text-gray-700 dark:text-gray-400">Hora de inicio: {horario.horaIni}</p>
                <p class="mb-2 text-gray-700 dark:text-gray-400">Hora de fin: {horario.horaFin}</p>
                <p class="mb-2 text-gray-700 dark:text-gray-400">Sala: {horario.sala.nombre}</p>
                <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                </li>
            ))}
            </ul>
        </div>
    </div>


  )
}
