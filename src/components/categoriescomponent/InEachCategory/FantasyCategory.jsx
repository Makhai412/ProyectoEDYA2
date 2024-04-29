import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const FantasyCategory = () => {
    const images = [
        {
            title: 'Mansión Encantada',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3EuVUPGihWXfwTt3myKVKOydPVW.jpg',
        },
        {
            title: 'Próximamente',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg',
        },
        {
            title: 'Próximamente',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9YEGawvjaRgnyW6QVcUhFJPFDco.jpg',
        },
        {
            title: 'Próximamente',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fHpKWq9ayzSk8nSwqRuaAUemRKh.jpg',
        },
        {
            title: 'Próximamente',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jB9l4mp0bzBgzE5y4tvBH6AMeMk.jpg',
        },
    ];

    return (
        <div className="max-w-xl mx-auto px-4 py-8 bg-cyan-700 rounded-lg shadow-lg" style={{ marginTop: "20px" }}>
            <div className="bg-cyan-700 rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center mb-6 text-white">¡Sumérgete en el Mundo de la Fantasía!</h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Adéntrate en reinos mágicos, donde la realidad se entrelaza con la imaginación y los sueños se hacen realidad. En esta sección, encontrarás las mejores películas de fantasía que te llevarán a lugares extraordinarios, habitados por criaturas místicas y poderes sobrenaturales.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                    Prepárate para vivir una experiencia cinematográfica única y llena de magia. Desde aventuras épicas en tierras encantadas hasta historias encantadoras de hadas y hechiceros, tenemos todo lo que necesitas para sumergirte en el maravilloso mundo de la fantasía.
                </p>



                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="carousel-container"
                    customButtonGroup={<button>Group</button>}
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    {images.map((image, index) => (
                        <div key={index} className="px-4">
                            <img src={image.imgSrc} alt={image.title} className="rounded-lg" />
                            <h3 className="text-white text-lg mt-2">{image.title}</h3>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default FantasyCategory;
