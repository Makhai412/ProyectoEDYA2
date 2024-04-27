import React, { useState } from 'react';
import { Card } from "flowbite-react";

const MovieCard = ({ movie }) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <Card
            className="max-w-sm border border-red-500 rounded-lg p-4" // Añadido padding
            imgAlt={movie.alt}
            imgSrc={movie.imageUrl}
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {movie.title}
            </h5>
            {showInfo && (
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {movie.description}
                </p>
            )}
        </Card>
    );
};

const Home = ({ movies }) => {
    const [showInfoArray, setShowInfoArray] = useState(Array(movies.length).fill(false));

    const handleMouseEnter = (index) => {
        const newShowInfoArray = [...showInfoArray];
        newShowInfoArray[index] = true;
        setShowInfoArray(newShowInfoArray);
    };

    const handleMouseLeave = (index) => {
        const newShowInfoArray = [...showInfoArray];
        newShowInfoArray[index] = false;
        setShowInfoArray(newShowInfoArray);
    };

    return (
        <div className="container mx-auto py-8"> {/* Añadido padding vertical y centrado horizontal */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {movies.map((movie, index) => (
                    <MovieCard
                        key={index}
                        movie={movie}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
