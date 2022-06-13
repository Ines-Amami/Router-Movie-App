import React from 'react'
import"./Description.css"
import { Link, useParams } from 'react-router-dom'
import { movies } from "../../data";

const Description = () => {
   const params=useParams()
   console.log(params)
   const item = (movies.filter(element => element.id == params.id)[0])
  return (
     <div className='desc'>
   <Link to="/"> <button> home</button></Link>
     <div className="content">
      <h1 className="title">Description:</h1>
      
      <p >{item.description}</p>
    </div>
    
      <h2>trailer</h2>
  


  <iframe width="560" height="315" src=  {item.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default Description