import React from 'react'
import MovieCrad from "../MovieCard/MovieCard.js"


const MovieList = ({movies}) => {
  return (
    <div style={{display:"flex" ,height:"600px"}}  >
    
      { movies.map( (el,index)=>(
          <MovieCrad key={index} el={el} />
      ))
      }
      </div>
  )
}

export default MovieList