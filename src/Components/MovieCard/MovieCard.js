import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCrad = ({el}) => {
  
  return (
  
      <div className="Container">
        <Link to={`/Desc/${el.id}`}>
        <section className="hero-section">
        <div className="card-grid">
          <div className="card" >
            <div className="card__background">
         
            <img src={el.posterURL} alt="" />
          
              </div>

            <div className="card__content">
             <p className="card__heading">{el.title}</p>
             <ReactStars  edit={false} name="rate" starColor="red" size={20} value={el.rating} count={10}/>
            </div>
          </div>
        </div>
      </section>
      </Link>
    </div>
  );
};

export default MovieCrad;