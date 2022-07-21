import {useEffect, useState} from 'react'
import Score from './score'
import Card from './card'


const Main = (props) => {

    
    const APP_URL = "https://www.omdbapi.com?apikey=20ed66a7"

    const [movies,setMovies] = useState([])
    const [num,setNum] = useState(0)
    const movie ={
        Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        Title: "Batman Begins",
        Type: "movie",
        Year: "2005",
        imdbID: "tt0372784",
    }

    const getMovies = async () =>{ 
    const result = await fetch (`${APP_URL}&s=batman&page=1`)    
    const response = await result.json()
    const result2 = await fetch (`${APP_URL}&s=batman&page=2`)    
    const response2 = await result2.json()
        
        
         setMovies([...response.Search,...response2.Search])
    }
        
    const clickHandler = () => {
        let random = Math.floor(Math.random() * 20);
        console.log(random)
    }
        
    useEffect(()=>{
        getMovies()
        clickHandler()
        
    },[])

        
        


    return(
        <div className='main'>
            {
                movies.map(movie => <Card movie={movie}/> )
            }
            
        </div>
    )

}

export default Main