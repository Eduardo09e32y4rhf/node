

export default function MovieCard(props.movie){
    return(
        <li key={movie.id} className='movie-card'>
        <p>
    {movie.title}
    </p>

    <p className='description'>
        {movie.overview}
    </p>
    <img src="{'https://image.tmdb.org/t/p/original${movie.poster_path} '}" alt="" />
      <p>
        {movie.vote_average}
      </p>

    </li>
    )
}