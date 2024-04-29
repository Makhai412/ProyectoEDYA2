import React, { useState } from "react";
import { Link } from "react-router-dom";

export function MovieCard({ id, title, description, imgSrc, imgAlt }) {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <Link to={`/movie/${id}`} style={{ textDecoration: "none" }}>
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
