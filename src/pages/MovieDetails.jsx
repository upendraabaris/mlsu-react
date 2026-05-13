import { useParams } from 'react-router-dom';
import movies from '../data/movies.json';

const MovieDetails=()=>{
    const {id} = useParams();

    const movie = movies.filter((item,index)=>
        index == id)
    return(
        <>
        <div className=''>
                {
                    movie.map((item)=>(
                        <div className='border p-5 rounded-lg'>
                            <img src={item.image} alt={item.title} />
                            <h1>{item.title}</h1>
                            <p>Year: {item.year}</p>
                            <p>Rating: {item.rating}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default MovieDetails;