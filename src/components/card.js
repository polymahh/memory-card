const Card = (props) => {

    return(
        <div className='card'>
            {/* <small>{movie.Title}</small> */}
            <img src={props.movie.Poster} alt={props.movie.Title} width='200px' height='300px' id={props.movie.Title} onClick={(e)=> props.ramdomise(e)}/>
        </div>
    )

}

export default Card