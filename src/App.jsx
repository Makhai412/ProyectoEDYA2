import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavbarComponent from "./components/navbar/NavBarComponent";
import Home from "./pages/home/Home";

const movies = [
  {
    title: "Scarface",
    alt: "Meaningful alt text",
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iDABT5GD9OQmFiXM3wR0DJIxtkY.jpg",
    description: "Tony Montana es un emigrante cubano frío e implacable que se instala en Miami con el propósito de convertirse en un gángster importante, y poder así ganar dinero y posición. Con la colaboración de su amigo Manny Rivera inicia una fulgurante carrera delictiva, como traficante de cocaína, con el objetivo de acceder a la cúpula de una organización de narcos",
  },
  {
    title: "Demon Slayer: Kimetsu no Yaiba -Entrenamiento con los Hashira",
    alt: "Meaningful alt text",
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8g56u2k9CvMHP5IG257QVj9gj1b.jpg",
    description: "Tanjiro se somete a un riguroso entrenamiento con el Hashira de Piedra, Himejima, en su búsqueda por convertirse en un Hashira. Mientras tanto, Muzan sigue buscando a Nezuko y Ubuyashiki.",
  },

  {

    title: "Sonic, la película",
    alt: "Meaningful alt text",
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rK25c71fYVi0Bv7RrTChK7NAQjC.jpg",
    description: "Tom Wachowski, el sheriff de la ciudad de Green Hills, viajará a San Francisco para ayudar a Sonic, un erizo azul antropomórfico que corre a velocidades supersónicas, en su batalla contra el maligno Dr. Robotnik y sus aliados.",
  },

  {

    title: "Madame web",
    alt: "Meaningful alt text",
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/blq050GHBt0Fzx1j9FvohaEuknJ.jpg",
    description: "Después de sobrevivir a un accidente, la paramédica Cassandra Webb comienza a desenvolver sus habilidades clarividentes. Obligada a enfrentar revelaciones sobre su pasado, forja una relación con tres mujeres jóvenes destinadas a futuros poderosos... si todas pueden sobrevivir a un presente mortal.",
  },


  {

    title: "Imaginario: Juguete Diabólico",
    alt: "Meaningful alt text",
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6jrq4lA5KV3oIFnCYGDueSMTENd.jpg",
    description: "Cuando Jessica se muda de regreso a la casa de su infancia junto con su familia, su hija menor Alice desarrolla un apagó inquietante con un oso de peluche llamado Chauncey que encontró en su sótano. Alice empezó a jugar con Chauncey. Los juegos que empezaron inocentemente se fueron volviendo más siniestros.",
  },

  {

    title: "La Casa del Terror",
    alt: "Meaningful alt text",
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6fuNWZzY0RijO1Xpw46soazDFMb.jpg",
    description: "En Halloween, seis amigos deciden entrar en una casa encantada que promete ofrecer una experiencia extrema a base de explotar sus miedos más profundos. La noche se volverá mortal cuando se den cuenta de que algunos monstruos son reales.",
  },

  {

    title: "Mansión embrujada",
    alt: "Meaningful alt text",
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3EuVUPGihWXfwTt3myKVKOydPVW.jpg",
    description: "Inspirada en la clásica atracción del parque temático, Mansión Encantada (Haunted Mansion) cuenta la historia de una mujer y su hijo que reclutan a un variopinto grupo de expertos espirituales para que les ayuden a liberar su hogar de unos ocupantes sobrenaturales",
  },



  {

    title: "Avengers: Infinity War",
    alt: "Meaningful alt text",
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ksBQ4oHQDdJwND8H90ay8CbMihU.jpg",
    description: "Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo para intentar derrotar al poderoso Thanos antes de que su ataque de devastación y ruina ponga fin al universo.",
  },



  {

    title: "Winnie the Pooh: Miel y Sangre",
    alt: "Meaningful alt text",
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ZmbSkGEpXFufbDhgfTnSrFAguo.jpg",
    description: "Ahora asilvestrados y sedientos de sangre, Winnie the Pooh y Piglet aterrorizan a Christopher Robin y a unas jóvenes en una casa del bosque.",
  },

  {

    title: "Terrifier 2: El Payaso Siniestro",
    alt: "Meaningful alt text",
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6ZfvF7ZS8MJXe0YwRkPAtXNpXrG.jpg",
    description: "Después de ser resucitado por una entidad siniestra, Art the Clown regresa al condado de Miles, donde debe cazar y destruir a una adolescente y a su hermano menor en la noche de Halloween..",
  },

];

const App = () => {
  return (
    <main className="">
      <BrowserRouter>
        <NavbarComponent />
        <Home movies={movies} />
      </BrowserRouter>
    </main>
  );
};

export default App;
