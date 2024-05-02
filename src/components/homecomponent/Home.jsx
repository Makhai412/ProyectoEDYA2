import React from "react";
import { MovieCard } from "./MovieCard";
import infosalas from "../../../src/pages/infosalas.json";
function Home() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {infosalas.map((movie) => (
                <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.nombre}
                    description={movie.sinopsis}
                    imgSrc={movie.img}
                    imgAlt={movie.nombre}
                    schedule = {movie.horario}
                    puntuation = {movie.calificacion}
                    reviews={movie.reviews}
                />
            ))}

        </div>
    );
}

export default Home;
