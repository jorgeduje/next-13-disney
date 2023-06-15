"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Movies.css";
import CardMovie from "@/components/common/cardMovie/CardMovie";

const Movies = ({ movies, gender }) => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: false,
  };

  return (
    <div>
      <h4 className="text-white text-xl capitalize">{gender}</h4>
      <Slider {...settings}>
        {movies
          .filter((movie) => movie.gender.includes(gender))
          .map((movie) => {
            return (
             <CardMovie key={movie.id} movie={movie} isInHome={true} />
            );
          })}
      </Slider>
    </div>
  );
};

export default Movies;