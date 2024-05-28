import React, { useState } from "react";
import { categorias } from "../categoriescomponent/ListaCategories"; // Asegúrate de que la ruta sea correcta

const CategoryFilter = ({ onFilterChange }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryChange = (category) => {
        setSelectedCategories((prevState) => {
            let updatedCategories;
            if (prevState.includes(category)) {
                updatedCategories = prevState.filter((cat) => cat !== category);
            } else {
                updatedCategories = [...prevState, category];
            }
            onFilterChange(updatedCategories);
            return updatedCategories;
        });
    };

    return (
        <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Filtrar</h3>
            <div className="flex flex-wrap">
                {categorias.map((categoria) => (
                    <label key={categoria.id} className="mr-4 flex items-center">
                        <input
                            type="checkbox"
                            value={categoria.title}
                            onChange={() => handleCategoryChange(categoria.title)}
                            className="mr-2"
                        />
                        <span className="text-lg">{categoria.title}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;
