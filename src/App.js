/* eslint-disable no-undef */
import React, { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList/MovieList.js";
import AddMovie from "./Components/AddMovie/AddMovie";
import Filter from "./Components/Filter/Filter.js";
import { movies } from "./data.js";
import Carousel from "react-bootstrap/Carousel";
import { Link, Route, Routes } from "react-router-dom";
import Description from "./Components/Description/Description";

function App() {
  const [moviesList, setMoviesList] = useState(movies);
  
  const [rate, setRate] = useState(0);
  const [search, setsearch] = useState("");
  const getNewMovie = (newM) => {
    setMoviesList([...moviesList, { ...newM, id: moviesList.length }]);
  };
  const handleDclick = () => {
    setMoviesList([]);
  };
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <div>
        <Carousel fade style={{width:"2900"}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/Black-Panther.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="movie-info">
              <h1>Black Panther</h1>
              <ul className="genre" style={{ marginLeft: "130px" }}>
                <li>horror</li>
                <li>sci-fi</li>
                <li>action</li>
              </ul>
              <button style={{ marginLeft: "180px" }}>watch trailer </button>
              <h3>In theaters</h3>
              <h4>11.11.2021</h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/Spider-Man.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="movie-info">
              <h1>Spider-Man</h1>
              <ul className="genre" style={{ marginLeft: "130px" }}>
                <li>horror</li>
                <li>sci-fi</li>
                <li>action</li>
              </ul>
              <button style={{ marginLeft: "180px" }}>watch trailer </button>
              <h3>In theaters</h3>
              <h4>11.11.2021</h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/iron-man-3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="info">
            <div className="movie-info">
              <h1>Iron Man</h1>
              <ul className="genre" style={{ marginLeft: "130px" }}>
                <li>horror</li>
                <li>sci-fi</li>
                <li>action</li>
              </ul>
              <button style={{ marginLeft: "180px" }}>watch trailer </button>
              <h3>In theaters</h3>
              <h4>11.11.2021</h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="List">
        <ul className="options">
          <li className="op">in theaters</li>
          <li className="op">coming soon</li>
          <li className="op">charts</li>
          <li className="op">tv series</li>
          <li className="op">trailers</li>
          <li className="op">more</li>
        </ul>
        <div className="topnav">
          <Filter setsearch={setsearch} setRate={setRate} rate={rate} />
        </div>
        {moviesList.length ? (
          <MovieList
            movies={moviesList.filter(
              (el) =>
                el.title
                  .toLocaleLowerCase()
                  .includes(search.trim().toLowerCase()) && el.rating >= rate
            )}
           
          />
        ) : (
          <h1 style={{ marginLeft: "650px" }}>no movies</h1>
        )}
        <div className="Bnt">
          <button onDoubleClick={handleDclick}>
            Clear all
          </button>
          <Link to="/addmovies"> <button> add movie</button></Link>
        </div>
      </div>  
    
      </div>}>
        
      </Route>
<Route path="/addmovies" element={<AddMovie  getNewMovie={getNewMovie}/>} />

<Route path="/Desc/:id" element={ <Description /> } />
      </Routes>
      
    </div>
  );
}

export default App;
