import React, {useEffect, useState} from 'react';
import MovieDetail from './MovieDetail';
import Graph from './Graph';
import { render } from 'react-dom';
import {FormattedDate, FormattedMessage} from 'react-intl';

function Movies(){
    // Variable de estado de las películas
    const [movies, setMovies] = useState([]);
    // Variable de estado de la película seleccionada
    const [selectedMovie, setSelectedMovie] = useState(null);
    useEffect(()=>{
        if(!navigator.onLine){
            if(localStorage.getItem("movies") === null) {
                let emptyarray = {name: "Loading...", directedBy:"Loading...", country:"Loading...", budget:"Loading...", views:"Loading..."};
                setMovies(emptyarray);
            } else {
                setMovies(JSON.parse(localStorage.getItem("movies")));
            }
        } else {
            //let locale = navigator.language;
            let locale = 'es-ES';
            console.log('locale', locale);
            let URL = null;
            if(locale === 'es-ES'){
                URL = "https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json";
            } else {
                URL = "https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json";
            }
            fetch(URL).then(res=>res.json()).then(res=>{
                console.log(res);
                setMovies(res);
                console.log('movies', movies);
                localStorage.setItem("movies", JSON.stringify(res)); 
            })
        }
    }, []);

    function renderMovieDetail(e, movie){
        e.preventDefault();
        console.log('clicked', movie);
        setSelectedMovie(movie);
    }

    //Devuelve el valor del componente que contiene la tabla y el detalle de la película seleccionada
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="row">
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">
                      <FormattedMessage id="Name" />
                    </th>
                    <th scope="col">
                      <FormattedMessage id="DirectedBy" />
                    </th>
                    <th scope="col">
                      <FormattedMessage id="Country" />
                    </th>
                    <th scope="col">
                      <FormattedMessage id="Budget" />
                    </th>
                    <th scope="col">
                      <FormattedMessage id="ReleaseDate" />
                    </th>
                    <th scope="col">
                      <FormattedMessage id="Views" />
                    </th>
                    <th>Info</th>
                  </tr>
                </thead>
                <tbody>
                  {movies.map(function (movie, index) {
                    return (
                      <tr key={index}>
                        <th scope="row">{movie.id}</th>
                        <td>{movie.name}</td>
                        <td>{movie.directedBy}</td>
                        <td>{movie.country}</td>
                        <td>{movie.budget}</td>
                        <td>
                          <FormattedDate
                            value={new Date(movie.releaseDate)}
                            year="numeric"
                            month="long"
                            day="numeric"
                            weekday="long"
                          />
                        </td>
                        <td>{movie.views}</td>
                        <td>
                          <button
                            type="button"
                            onClick={(e) => renderMovieDetail(e, movie)}
                            class="btn btn-secondary"
                          >
                            Detail
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className = 'row'>
                <Graph movies={movies}/>
            </div>
          </div>
          <div className="col">
            {
              // Mira si selectedMovie es false y si no, llama a la función para renderizar
              selectedMovie && <MovieDetail movie={selectedMovie} />
            }
          </div>
        </div>
      </div>
    );
}

export default Movies; 