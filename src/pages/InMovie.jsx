import infosalas from './infosalas.json'
import React from 'react'
import { Puntuation } from '../components/moviescomponent/Puntuation'
import { Schedule } from '../components/moviescomponent/Schedule'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const InMovie = () => {

    const location = useLocation()
    const { id, title, description, imgSrc  } = location.state

    return (
        <>
            <section class="bg-white md:py-8 dark:bg-gray-900 antialiased font-serif">
                <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                    <div class="lg:grid lg:grid-cols-5 lg:gap-8 xl:gap-16">
                        <div class="shrink-0 max-w-md lg:max-w-lg mx-auto col-span-2">
                            <img class="w-auto h-5/6 dark:hidden" src={imgSrc} alt="" />
                            <img class="w-auto hidden dark:block" src={imgSrc} alt="" />
                        </div>
                        <div class="mt-4 sm:mt-8 lg:mt-0 col-span-2">
                            <Puntuation title={title} />
                            <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                            <p class="mb-6 text-gray-500 dark:text-gray-400">
                                {description}
                            </p>
                            <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                                <Link to={`/movie/${id}/reserva`} state={{ id }}>
                                    <button type="button" href="#&&" class=" font-serif text-white bg-gradient-to-r from-red-500 via-red-700 to-red-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-red-800 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2">Reservar</button>
                                </Link>
                            </div>
                        </div>
                        <div class="col-span-1">
                            <Schedule pelicula={infosalas[0]} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

