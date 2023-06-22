"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardMovieCarousel from "../cardMovieCarousel/CardMovieCarousel";

const Carousel = ({movies}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        centerMode: false,
        pauseOnHover: true
      };
  return (
    <Slider {...settings}>
    {movies
      .map((movie) => {
        return (
          <div key={movie.id}>
            <CardMovieCarousel movie={movie} isInHome={true}/>
          </div>
        );
      })}
  </Slider>
  )
}

export default Carousel