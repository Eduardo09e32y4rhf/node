

'use client';
import { useEffect, useState } from 'react';
import axios,  from 'axios';
import './index.scss';
import { Movie } from '@/app/Types';






export default function MovieList (){
    
    const [movies, setMovies]= useState<Movie []>([]); 

useEffect(() =>{
    getMovies();
}, [])}

const getMovies =() =>{
       Axios({
        method:'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key:'174ac822eacf29a95798c149ea01c241',
                language:'pt-br'
            }
        }).then( response =>{
            console.log(response.data.results);
        })
    

    getMovies();
    return (

        <ul className="movie-list">
         {MovieList.map((movie)=>

           

         )}
        </ul>
    );
}