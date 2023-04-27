import { useNavigate } from 'react-router-dom';
import { useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Swal from 'sweetalert2'
import sinImagen from '../img/sinImagen.png';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

function Resultados(props){

  const token = sessionStorage.getItem('token');
 
    let query = new URLSearchParams(window.location.search);
    let word = query.get('keyword');

    
    const [movieList, setMovieList]= useState([]);
    const navigate = useNavigate();
  
  
  
    useEffect(() => {
  
            //this is for call to API for catch Data for page
            //https://api.themoviedb.org/3/search/keyword?api_key=5059c163bdd57f91e781b71a3488ca2c&query={word}
            const endPointApi = `
            https://api.themoviedb.org/3/search/movie?api_key=5059c163bdd57f91e781b71a3488ca2c&language=es-ES&query=${word}`;
            axios
            .get(endPointApi)
            .then(responsed => {
                const apiData = responsed.data;
                setMovieList(apiData.results);
                //console.log(apiData);
            })//end .them
            .catch(error => {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'algo Fallo!',
                footer: error.message
              })
  
  
            });
  
              },[movieList  ]); //end useEffect
  
            //console.log(movieList);
  



return(
<> 
{!token && <Navigate to="/"  replace={true}/>}

<card className="card" title="Resultados">
<h3 className="container align-content-center">Busqueda por: {word}</h3>
<div className="container align-content-center">
<div className="row my-card m-4 ">

{movieList.length === 0 && <div className="container">No se encontraron resultados...</div>}
{
    movieList.map((oneMovie,idx) => {
      return (
       
        <div className="col-md-4 my-4 ">
           <Toaster/>
    
    <Card style={{ width: '18rem' }}  key={oneMovie.idx}>
    <button className="favourite-btn" onClick={props.App.addOrRemoveFromFavs}  data-movie-id={oneMovie.id} >💙</button>  
      <Card.Img  variant="top" src={oneMovie.poster_path !== null ? `https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}` : sinImagen } alt="Sin imagen"/>
      <Card.Body>
        <Card.Title>{oneMovie.title}  </Card.Title>
        <Card.Text>
          
          {oneMovie.overview.substring(0,50)+"..."}
          
        </Card.Text>
        <Button variant="primary" onClick={() => navigate(`/Detalle?movieID=${oneMovie.id}`)} >
          
 
          Ver mas</Button>
      </Card.Body>
    </Card>
    </div>
   
   
      )//end return movieList
    })// end map
    } 
</div>
</div>

</card>

</>
);
}
export default Resultados;