import Header from "../template/Header";
import { Fragment, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export default function Africa(props) {
  const { paises, isLoaded } = useFetch("https://restcountries.com/v3.1/region/africa")

  return (
    <>
      <main>
        <div className="listado-paises">
          {
            !isLoaded
              ? <h2>Cargando información...</h2>
              : (
                paises.map(function (pais) {
                  return (
                    <div key={pais.cca2} className="pais">
                      <img src={pais.flags.png} alt={pais.name.common} />
                      <div className="info">
                        <h3>{pais.name.common}</h3>
                        <small>Capital: {pais.capital}</small>
                      </div>
                    </div>
                  )
                })
              )
          }
        </div>
      </main>
    </>
  );
}
