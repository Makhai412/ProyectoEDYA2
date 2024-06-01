import React from 'react';
import TeamMember from '../../components/aboutuscomponent/TeamMember';
import { SocialLinks, SocialLinks1, SocialLinks2 } from '../../components/aboutuscomponent/SocialLinks';

const AboutUs = () => {
  return (
    <section className="bg-white dark:bg-gray-900 h-full">
      
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          
          <div className="relative">
            <div className="absolute inset-0 bg-cover bg-center z-0 filter blur-sm" style={{ backgroundImage: "url('/logo3.png')", opacity: 0.7 }}></div>
              <div className="relative z-10">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nuestro Equipo</h2>
                <p className="font-semibold text-gray-800  shadow-sm sm:text-xl dark:text-gray-400">
                    
                    Este proyecto fue diseñado para la materia de Estructura de Datos Y Algoritmos 2, de la carrera de Ingeniería Informática de la Universidad Autónoma de Occidente.
                    Bajo la tutela del profesor Jonathan Lopez, se logró la creación de un proyecto que simula una plataforma de streaming de películas.
                </p>
                <div className="mx-auto max-w-screen-sm lg:mb-16">
        
                <div className="grid gap-8 lg:gap-16 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 justify-center items-center">
                  <TeamMember
                    name="Andres Higuera Lozano"
                    role="Desarrollador - Q/A"
                    imgSrc="https://i.ibb.co/HgmfXDH/Foto-Andres.jpg"
                    socialLinks={SocialLinks}
                  />
                  <TeamMember
                    name="Andres Felipe Soto Ramirez"
                    role="Desarrollador - Q/A"
                    imgSrc="https://i.ibb.co/qF9nXgQ/FotoSoto.jpg"
                    socialLinks={SocialLinks1}
                  />
                  <TeamMember
                    name="Andres Felipe Gómez Ordoñez"
                    role="Desarrollador"
                    imgSrc="https://i.ibb.co/pzGxGrk/Foto-Gomez.jpg"
                    socialLinks={SocialLinks2}
                  />
                </div>
              </div>
              </div>
          </div>
        </div>
       
        
      </div>
    </section>
  );
};

export default AboutUs;
