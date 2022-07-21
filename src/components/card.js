const Card = ({ movie }) => {

    return(
        <div className='card'>
            {/* <small>{movie.Title}</small> */}
            <img src={movie.Poster} alt={movie.Title} width='200px' height='300px'/>
        </div>
    )

}

export default Card