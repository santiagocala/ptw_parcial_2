import React, {useEffect, useState} from 'react';
//import { md5 } from "blueimp-md5";
const md5 = require("blueimp-md5");

function Characters(){
    // Variable de estado de personajes
    const [characters, setCharacters] = useState([]);
    // Variable de estado de joke
    const [joke, setJoke] = useState(null); 
    useEffect(()=>{
        if(!navigator.onLine){
            if(localStorage.getItem("characters") === null) {
                let emptyarray = {name:"Loading", lastName:"Doe", age:50, eyeColor:"blue"};
                setCharacters("Loading...")
            } else {
                console.log('llegamos acá');
                setCharacters(JSON.parse(localStorage.getItem("characters")));
            }
        } else {
            let ts = '10';
            let publickey = '578df3b9e19c0722e85ba450c61672ed';
            let privatekey = '9ad98d8f62bb42b5fc38b5f68116affb3b2695b1';
            let hash = md5(ts + privatekey + publickey); 
            console.log('hash', hash);
            const URL = "https://gateway.marvel.com:443/v1/public/characters?ts=10&apikey=578df3b9e19c0722e85ba450c61672ed&hash=e20f31d5ce0ed0e50a4cdb0f8b9752b2";
            fetch(URL).then(res=>res.json()).then(res=>{
                console.log(res);
                setCharacters(res.data.results);
                console.log('characters', characters);
                localStorage.setItem("characters", JSON.stringify(res.data.results)); 
            })
        }
    }, []);
    return(
        <div className="container">
          <div className="row">
            {characters.map((character) => {
              return (
                <div className=" col-1col-md-3 col-lg-3" key={character.name}>
                  <div className="card text-white bg-dark mb-3">
                    <div className="card-body text-center">
                      <h5 className="card-title">{character.name}</h5>
                      <p className="card-text">{character.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    )
}

export default Characters; 