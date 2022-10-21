import React from 'react';
import axios from 'axios'

function CallApi() {
    const getPokemon = async () => {
      const options = {
        method: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/charmander",
        headers: {
          'Content-Type': 'application-json', 
        }
      }

      return axios.request(options).then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error.response.data)
    });
    }

      return (
        <>
          <button type="button" onClick={getPokemon} className="btn btn-warning">Pegar Pokemon !</button> 
        </>
    );
}

export default CallApi;