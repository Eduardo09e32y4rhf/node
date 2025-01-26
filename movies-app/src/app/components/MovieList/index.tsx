

'use client';
import { useState } from 'react';
import axios from 'axios';

console.log(axios.isCancel('something'));
import './index.scss';
import { METHODS } from 'node:http';



export default function MovieList (){
    
const TMDB_API_KEY = '174ac822eacf29a95798c149ea01c241';

export const getMoviesFromDatabase = async () => {
  const response = await axios.get(`https://api.themoviedb.org/3/discover/movie{174ac822eacf29a95798c149ea01c241}`);
  return response.data.results;
};
            
            params: {

                language: 'pt-br'
            }
        }).then( 'response' =>{
            console.log(response);
        })
    }

    getMovies();
    return (

        <ul className="movie-list">
            <li></li>
        </ul>
    );
}