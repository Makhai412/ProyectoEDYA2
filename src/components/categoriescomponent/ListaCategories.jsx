import React from 'react';
import CardCategories from './CardCategories';
import { TbSwords } from 'react-icons/tb';
import { PiCampfireDuotone } from "react-icons/pi";
import { GiBlood } from "react-icons/gi";
import { SlMagicWand } from "react-icons/sl";




const categorias = [
    {
        id: 1,
        title: 'Acción',
        imgSrc: 'https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        icon: TbSwords
    },
    {
        id: 2,
        title: 'Aventura',
        imgSrc: 'https://img.freepik.com/foto-gratis/trekking-bosque_53876-28.jpg?t=st=1714343084~exp=1714346684~hmac=e9de5cfa63cc55fd4715493a524ed99c266946566275934a69205da9ec284535&w=1380',
        icon: PiCampfireDuotone
    },

    {
        id: 3,
        title: 'Fantasía',
        imgSrc: 'https://img.freepik.com/vector-premium/ilustracion-divertida-planeta-fantasia_153233-296.jpg?w=826',
        icon: SlMagicWand

    },

    {
        id: 4,
        title: 'Terror',
        imgSrc: 'https://images.unsplash.com/photo-1587176296591-94fae5d320bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        icon: GiBlood

    }
];

const ListaCategories = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categorias.map(categoria => (
                <CardCategories
                    key={categoria.id}
                    title={categoria.title}
                    description={categoria.description}
                    imgSrc={categoria.imgSrc}
                    icon={categoria.icon} // Pasa el icono correspondiente como prop
                />
            ))}
        </div>
    );
}

export { categorias };
export default ListaCategories;
