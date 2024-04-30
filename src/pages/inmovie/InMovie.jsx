import React from 'react'
import { Puntuation } from '../../components/moviescomponent/Puntuation'
import { Schedule } from '../../components/moviescomponent/Schedule'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'


export const InMovie = () => {
    
    const location = useLocation()
    const { id, title, description, imgSrc, schedule, puntuation, reviews  } = location.state

    return (
        <>
            <section className="bg-white md:py-8 dark:bg-gray-900 antialiased font-serif">
                {console.log(location.state)}
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-8 xl:gap-16">
                        <div className="shrink-0 max-w-md lg:max-w-lg mx-auto col-span-2">
                            <img className="w-auto h-5/6 dark:hidden" src={imgSrc} alt="" />
                            <img className="w-auto hidden dark:block" src={imgSrc} alt="" />
                        </div>
                        <div className="mt-4 sm:mt-8 lg:mt-0 col-span-2">
                            
                            <div className="mt-4 font-serif sm:mt-8 lg:mt-0">
                                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                    <h1 className="text-xl font-black text-gray-900 sm:text-5xl dark:text-white">
                                        {title}
                                    </h1>
                                                                      
                                </div>
                                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                    <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                                    Sinopsis
                                    </p>
                                    <Puntuation puntuation={puntuation} reviews={reviews} />
                                </div>
                               
                            </div>
                            <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                            <p className="mb-6 text-gray-500 dark:text-gray-400">
                                {description}
                            </p>
                            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                                <Link to={`/movie/${id}/reserva`} state={{ id }}>
                                    <button type="button" href="#&&" className=" font-serif text-white bg-gradient-to-r from-red-500 via-red-700 to-red-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-red-800 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2">Reservar</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <Schedule schedule={schedule} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

