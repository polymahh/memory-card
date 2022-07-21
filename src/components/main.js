import {useEffect, useState} from 'react'
import Score from './score'
import Card from './card'


const Main = (props) => {

    
    const APP_URL = "https://www.omdbapi.com?apikey=20ed66a7"

    const [movies,setMovies] = useState([])
    const [clicked,setClicked] = useState([])
    const [score,setScore] = useState(0)
    const [bestScore,setBestScore] = useState(0)

    const getMovies = async () =>{ 
    const result = await fetch (`${APP_URL}&s=batman&page=1`)    
    const response = await result.json()
    const result2 = await fetch (`${APP_URL}&s=batman&page=2`)    
    const response2 = await result2.json()
        
        
         setMovies([...response.Search,...response2.Search].slice(0,12))
    }
        
    const randomiseArray = () => {
        
        for(let i = movies.length -1 ; i > 0 ; i--){
            
            let j = Math.floor(Math.random() * (i + 1))
            let temItem = movies[i]
            movies[i] = movies[j]
            movies[j] = temItem
        }
        setMovies(movies) 
    }

    const clickHandler = (e)=> {
        randomiseArray()
        if(!clicked.find(item => item === e.target.id)){
            setClicked([...clicked,e.target.id])
            setScore(score + 1)
            
        }else {
            setClicked([])
            setScore(0)
        }
    }
    
    useEffect(()=>{
        getMovies()
        
    },[])

    useEffect(()=>{
        if(score > bestScore){
            setBestScore(score)
        }
    },[score,bestScore])
    
    return(
        <div className='main'>
            <Score score={score} bestScore={bestScore}/>
            <div className='container'>
            {
                movies.map((movie,index) => <Card ramdomise={clickHandler} movie={movie} index={index}/> )
            }
            </div>  
        </div>
    )

}

export default Main