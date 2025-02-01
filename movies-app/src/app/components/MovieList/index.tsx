

'use client';
import { useEffect, useState } from 'react';


import './index.scss';
import { url } from 'inspector';
import axios from 'axios';
export interface MovieType{
    title: string;
    poster_path:string;
    overview:string;
    vote_average:number;
}

export default function MovieList (){
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        getMovies();
    },[];)

const getMovies = ()  =>{
    axios({
        method: 'get',
        url:'https://api.themoviedb.org/3/discover/movie{174ac822eacf29a95798c149ea01c241',
        params:{
            api_key:'174ac822eacf29a95798c149ea01c241',
            languge:'pt-br'
        }

    }) .then( response=> {
       setMovies(response.data.results);
       
    })
}


return(
    <ul className='movie-list'>

        {movies.map((movie)=>  
          <li className='movie-card'>
           
       <p> 
        {movie.title}
        </p>    
        <p  className='description'>
            {movie.overview}
        </p>
        <img src="{'https://image.tmdb.org/t/p/original${movie.poster_path}'}" alt="" />
        <p>
            {movie.vote_average}
        </p>
          </li>
        )}
       
    </ul>
)

}
    


