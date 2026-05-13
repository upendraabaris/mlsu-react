import { useState } from 'react';
import movies from '../data/movies.json';
import { Link } from 'react-router-dom';

const Movies=()=>{
    const [ search, setSearch ] = useState("");

    const filterMovies = movies.filter((movie)=>{
        return movie.title.toLowerCase().includes(search.toLowerCase());
    })

    return(
        <>
        <div>
            <input type="text"
            className='border w-full p-5 mx-5 my-5'
            placeholder='search movies....'
            value={search}
            onChange={(e)=>setSearch(e.target.value)} />
        </div>
            <div className='grid grid-cols-3 gap-4 mx-20 my-20'>
                {
                    filterMovies.map((movie,index)=>(
                        <Link to={`/movie/${movie.id}`} key={index}>
                        <div className='border p-5 rounded-lg'>
                            <img src={movie.image} alt={movie.title} />
                            <h1>{movie.title}</h1>
                            <p>Year: {movie.year}</p>
                            <p>Rating: {movie.rating}</p>
                        </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default Movies;