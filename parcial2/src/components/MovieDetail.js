import React, { useEffect, useState } from "react";

function MovieDetail(props){
    console.log('props', props);
    return (
      <div className="card text-white bg-dark">
        <img
          src={props.movie.poster}
          class="card-img-top"
          alt="Image of the selected picture"
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.movie.name}</h5>
          <p className="card-text">{props.movie.description}</p>
          <h6>Cast: {props.movie.cast}</h6>
        </div>
      </div>
    );
}

export default MovieDetail;