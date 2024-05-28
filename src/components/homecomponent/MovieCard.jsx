import React, { useState } from "react";
import { Link } from "react-router-dom";

export function MovieCard({ movieId, title, description, imgSrc, imgAlt, schedule, puntuation, reviews}) {
    const [showDescription, setShowDescription] = useState(false);
    console.log('este es el horario:', schedule)
    return (
        <Link to={`/movie/${movieId}`} style={{ textDecoration: "none" }} state={{ movieId, title, description, imgSrc, schedule, puntuation, reviews }}>
            <div
                className="max-w-sm relative"
                onMouseEnter={() => setShowDescription(true)}
                onMouseLeave={() => setShowDescription(false)}
                style={{ margin: "40px", cursor: "pointer" }}
            >
                <img src={imgSrc} alt={imgAlt} className="w-full rounded-2xl shadow-lg" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-75 transition-opacity duration-300 opacity-0 hover:opacity-100" style={{ opacity: showDescription ? 1 : 0 }}>
                    <h5 className="text-2xl font-bold tracking-tight text-white">{title}</h5>
                    <p className="font-normal text-gray-200">{description}</p>                    
                </div>
            </div>
        </Link>
    );
}
