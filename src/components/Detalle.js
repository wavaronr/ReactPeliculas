
import {ListGroup, Card} from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from "axios";
import { useEffect, useState} from 'react';
import sinImagen from '../img/sinImagen.png';

function Detalle() {
    //const navigate = useNavigate();
    const token = sessionStorage.getItem('token');
    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID');
    console.log(movieID);
    const [movieDet, setMovieDet]= useState(null);


    useEffect(() => {

        //this is for call to API for catch Data for page
       
        const endPointApis = `https://api.themoviedb.org/3/movie/${movieID}?api_key=5059c163bdd57f91e781b71a3488ca2c&language=es-ES`;
        axios.get(endPointApis).then(response => {
            const apiDataMovie = response.data;
            
            setMovieDet(apiDataMovie);
           
       //     console.log(apiDataMovie);
        })//end .them
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Sin Acceso!',
            footer: error.message
          })


        });

          },[movieID]); //end useEffect
         console.log(movieDet);
    return (
        <>
        
        {!token && <Navigate to="/"  replace={true}/>}
        {!movieDet && <div className='Container bg-success'>Cargando..</div>}
        {movieDet &&
        <>   
        
          <div className='row'>
         <div className="col-md-4 my-4"> 

            <Card.Img  height={600}  bordered={true}  variant="top" src={movieDet.poster_path !== null ? `https://image.tmdb.org/t/p/w500/${movieDet.poster_path}` : sinImagen } />
          </div>
          <div className="col-md-8 my-4"> 
         <Card style={{ width: '40rem' }}>
            <Card.Body>
            <Card.Title>Tiitulo: {movieDet.title}</Card.Title>
            <Card.Header>{ movieDet.overview }</Card.Header>
           </Card.Body>
           <ListGroup className="list-group-flush">
             <ListGroup.Item>Popularidad: {movieDet.popularity}</ListGroup.Item>
             <ListGroup.Item>Ingresos: {movieDet.revenue}</ListGroup.Item>
             <ListGroup.Item>Fecha de lanzamiento: {movieDet.release_date}</ListGroup.Item>
           </ListGroup>
           <Card.Body> 
            <Card.Header> Generos:
              {/* allow looking at array into the object */}
              <ul>
              {movieDet.genres.map(oneGeneros => 
              <>{oneGeneros.name}, </>) }
              </ul>
              

            </Card.Header>
            </Card.Body>
        </Card>
        </div>

            </div>     
            
        
          
         </>
         }
         </>
        
                                        
    );
}

export default Detalle



