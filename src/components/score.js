const Score = ({score,bestScore}) => {

    return(
        <div className='scoreContainer'>

            <div className="score">Score: {score}</div>
            <div className="bestScore">Best Score: {bestScore}</div>

        </div>
    )

}

export default Score