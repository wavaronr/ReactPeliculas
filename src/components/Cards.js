import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState} from 'react';
import axios from "axios";
import Swal from 'sweetalert2'
import toast, { Toaster } from 'react-hot-toast';

function Cards(props) {
  

  
  
  const [movieList, setMovieList]= useState([]);
  const navigate = useNavigate();
  
  


  useEffect(() => {

          //this is for call to API for catch Data for page
          const endPointApi = 'https://api.themoviedb.org/3/discover/movie?api_key=5059c163bdd57f91e781b71a3488ca2c&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
          axios
          .get(endPointApi)
          .then(responsed => {
              const apiData = responsed.data;
              setMovieList(apiData.results);
              // console.log(apiData);
          })//end .them
          .catch(error => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'algo Fallo!',
              footer: error.message
            })


          });

            },[setMovieList]); //end useEffect

        //    console.log(movieList);

   function clickTest() {

    console.log("clickTest");
   } 
  

//props.props.props.addOrRemoveFromFavs

return (
    <>
     <Toaster/>
   <div className="container -fluid text-dark ">
   <div className="row  my-card m-4">
    
  
    {
    movieList.map((oneMovie,idx) => {
      return (
    
    
        <div className="col-md-4 my-4 gap-2">

    <Card style={{ width: '18rem' }}  key={oneMovie.idx}>
    {/* props.List.props.App.addOrRemoveFromFavs */}
        
      <button className="favourite-btn"  onClick={props.List.props.App.addOrRemoveFromFavs}   data-movie-id={oneMovie.id}>💙</button>  
      <Toaster/>

      <Card.Img  variant="top" src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} />

      <Card.Body>
        <Card.Title id="title">{oneMovie.title}  </Card.Title>
        
        <Card.Text>        {oneMovie.overview.substring(0,50)+"..."}    </Card.Text>
        <Button variant="primary" onClick={() => navigate(`/Detalle?movieID=${oneMovie.id}`)}>
          
 
          Ver mas</Button>
      </Card.Body>

    </Card>
    </div>
   
   
      )//end return movieList
    })// end map
    } 
  </div>
  </div>
 </>
  );
}

export default Cards;