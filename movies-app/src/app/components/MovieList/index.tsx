

'use client';
import { useState } from 'react';
import axios from 'axios';

console.log(axios.isCancel('something'));
import './index.scss';
import { METHODS } from 'node:http';



export default function MovieList (){
    
    const[movies, setmovies]= useState([]); 
    const getMovies =() =>{
      new Axios({
        METHODS:'get';
            url: "https://api.themoviedb.org/3/discover/movie";
            
            params: {
                api_key: "174ac822eacf29a95798c149ea01c241",
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