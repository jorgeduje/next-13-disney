"use client";

import { handleFav } from "@/store/favSlice";
import { useDispatch, useSelector } from "react-redux";
import { HiPlusSm } from "react-icons/hi";
import { BiCheck } from "react-icons/bi";
import { useEffect, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import Image from "next/image";
import "./MovieDetailStyles.css";

const MovieDetail = ({ movie }) => {
  const dispatch = useDispatch();
  const { myList } = useSelector((store) => store.favSlice);
  const exist = myList.some((e) => e.id === movie.id);
  const [opacity, setOpacity] = useState(1);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {};

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const newOpacity = 1 - scrollPos / 200; // Cambia el 500 según tu preferencia
      setOpacity(newOpacity < 0.2 ? 0.2 : newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function convertirHorasMinutos(numero) {
    var horas = Math.floor(numero / 60); // Obtiene las horas completas
    var minutos = numero % 60; // Obtiene los minutos restantes

    return horas + " h " + minutos + " min";
  }

  var resultado = convertirHorasMinutos(movie.duration);

  const generosFormateados = movie.gender.map((genero) => {
    const generoFormateado = genero
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toLowerCase());

    // Capitaliza la primera letra del género completo
    return generoFormateado.charAt(0).toUpperCase() + generoFormateado.slice(1);
  });

  const generosRenderizados = generosFormateados.join(", ");

  return (
    <div
      style={{
        display: "flex",
        // alignItems: "start",
        // justifyContent: "start",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "rgb(26, 29, 41)",
      }}
    >
      <div
        style={{
          width: "100%",
          zIndex: "2",
          position: "fixed",
          top: "0",
          opacity,
        }}
      >
        <Image
          src={movie.bgImage}
          alt="moviebg"
          width="2000"
          height="2000"
          style={{
            width: "100vw",
          }}
        />
        <div
          style={{
            width: "100%",
            minHeight: "100%",
            position: "absolute",
            inset: "0px",
            // backgroundSize: "100vw",
            backgroundImage:
              "radial-gradient(farthest-side at 73% 21%, transparent, rgb(26, 29, 41))",
          }}
        ></div>
      </div>
      <div
        style={{
          position: "relative",
          zIndex: "3",
          padding: "0 calc(3.5vw + 24px)",
          marginTop: "72px",
        }}
      >
        <div
          style={{
            marginTop: "56px",
            marginBottom: "16px",
            width: "341px",
            height: "191px",
          }}
        >
          <Image
            src={movie.titleImage}
            alt="tituloImage"
            width={341}
            height={191}
          />
        </div>
        <p
          style={{
            color: "#ffdb6e",
            marginBottom: "0.5rem",
            marginTop: "1rem",
            fontSize: "22px",
            fontWeight: "600",
          }}
        >
          Ya disponible en IMAX Enhanced
        </p>
        <p
          style={{
            color: "#cacaca",
            marginBottom: "1rem",
            marginTop: ".5rem",
            fontSize: "12px",
          }}
        >
          Más información en{" "}
          <span style={{ color: "#67bdff" }}>disneyplus.com/IMAXEnhanced</span>.
        </p>
        <div
          style={{
            color: "#f9f9f9",
            display: "flex",
            marginBottom: "5px",
          }}
        >
          <p
            style={{
              backgroundColor: "#31343E",
              fontSize: "14px",
              padding: "2px",
              marginRight: "4px",
              borderRadius: "3px",
              width: "32px",
              height: "20px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {movie.clasification}
          </p>
          <div style={{ width: "133px", height: "20px", marginRight: "4px" }}>
            <Image
              src={`https://res.cloudinary.com/dishtratk/image/upload/v1687450336/disney-app/common/scale_bb1bat.png`}
              alt="imax"
              width={133}
              height={20}
            />
          </div>
          <div style={{ width: "38px", height: "20px", marginRight: "4px" }}>
            <Image
              src={`https://res.cloudinary.com/dishtratk/image/upload/v1687450351/disney-app/common/scale_drubpj.png`}
              alt="imax"
              width={38}
              height={20}
            />
          </div>
          <p
            style={{
              backgroundColor: "#31343E",
              fontSize: "14px",
              padding: "2px",
              marginRight: "4px",
              borderRadius: "3px",
              width: "28px",
              height: "20px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#D8D9DA",
            }}
          >
            CC
          </p>
          <p
            style={{
              fontSize: "12px",
            }}
          >
            {movie.releaseYear} • {resultado}
          </p>
        </div>
        <p style={{ color: "#f9f9f9", fontSize: "12px" }}>
          {generosRenderizados}
        </p>
      </div>
      <div
        style={{
          position: "relative",
          zIndex: "3",
          padding: "0 calc(3.5vw + 24px)",
          display: "flex",
          alignItems: "center",
          flexFlow: "row wrap",
          marginTop: "32px",
        }}
      >
        <button
          className="bg-[#f9f9f9] hover:bg-[#f9f9f999]"
          style={{
            width: "195px",
            height: "56px",
            transition: "all .2s ease-in-out",
            border: "none",
            color: "#0e0b14",
            padding: "0 24px",
            margin: "0.25rem 0.75rem",
            marginLeft: "0px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "0.25rem",
          }}
        >
          <BsFillPlayFill style={{ fontSize: "32px" }} />
          <p
            style={{
              letterSpacing: "1.5px",
              marginLeft: "12px",
              fontSize: "15px",
            }}
          >
            VER AHORA
          </p>
        </button>
        <button
          className="bg-[#00000099] text-[#f9f9f9] hover:bg-[#f9f9f9] hover:text-[#000]"
          style={{
            height: "56px",
            padding: "0 24px",
            margin: "0.25rem 0.75rem",
            transition: "all .2s ease-in-out",
            border: "1px solid #f9f9f9",
            borderRadius: "0.25rem",
            fontWeight: "bold",
            letterSpacing: "1.5px",
          }}
        >
          TRÁILER
        </button>
        <button
          style={{
            borderRadius: "50%",
            border: "2px solid #f9f9f9",
            transition: "all .2s ease-in-out",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className={`buttonList ${isClicked && "rotate"}`}
          onClick={() => {
            dispatch(handleFav(movie));
            if (isClicked) {
              setIsClicked(false);
            } else {
              setIsClicked(true);
            }
          }}
        >
          {exist ? (
            <BiCheck
              style={{
                fontSize: "30px",
                color: "#0072D2",
                // borderRadius: "50%",
                // border: "2px solid #f9f9f9",
                // transition: "all .2s ease-in-out",
              }}
            />
          ) : (
            <HiPlusSm
              style={{
                fontSize: "40px",
                // borderRadius: "50%",
                // border: "2px solid #f9f9f9",
                // transition: "all .2s ease-in-out",
              }}
              className="plus"
            />
          )}
        </button>
      </div>
      <div
        style={{
          position: "relative",
          zIndex: "3",
          padding: "0 calc(3.5vw + 24px)",
          marginBottom: "56px",
        }}
      >
        <p
          style={{
            fontSize: "20px",
            color: "#f9f9f9",
            paddingBottom: "1rem",
            paddingTop: "1rem",
            width: "874px",
            textAlign: "justify",
          }}
        >
          {movie.description}
        </p>
      </div>
      <div
        style={{
          position: "relative",
          zIndex: "3",
          margin: "0 calc(3.5vw + 24px)",
          borderBottom: "2px solid rgba(249, 249, 249, 0.2)",
          marginBottom: "10px",
        }}
      >
        <p
          style={{
            color: "#f9f9f9",
            paddingBottom: "15px",
            fontSize: "20px",
            fontWeight: "600",
            letterSpacing: "2px",
            lineHeight: "1.4",
            position: "relative",
            width: "118px",
          }}
          className="detalles"
        >
          DETALLES
        </p>
      </div>
    </div>
  );
};

export default MovieDetail;
