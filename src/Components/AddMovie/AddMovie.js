import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate} from "react-router-dom";
const AddMovie = ({ getNewMovie }) => {
    const navigate=useNavigate()
  //const [show, setShow] = useState(false);
 // const handleClose = () => setShow(false);
 
  const [newMovie, setNewMovie] = useState({ "title": "", "description": "", "posterUrl": "", "rating": 0, });
  const handleChange = (e) => {
  setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
  }
  const handleClick = () => {
      if (newMovie.title) {
          getNewMovie(newMovie);
          setNewMovie({ "title": "", "description": "", "posterUrl": "", "rating": 0 })
          navigate("/") ;
      }
      else { alert("title is required") }
      }
  

  return (
    <>
  
        <Modal.Header >
            <Modal.Title>AddMovie:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" required name="title" value={newMovie.title} placeholder="title" onChange={handleChange} />
            <input type="text" name="description" value={newMovie.description} placeholder="description" onChange={handleChange} />
            <input type="url" name="posterUrl" value={newMovie.posterUrl} placeholder="poster URL" onChange={handleChange} />
            <input type="number" name="rating" value={newMovie.rating} placeholder="rating" onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
                  <Button variant="primary" onClick={handleClick}>
                Save Changes
            </Button>
        </Modal.Footer>
    
</>
  );
};
export default AddMovie;