import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import toast, { Toaster } from 'react-hot-toast';


function Favoritos(props){
    const navigate= useNavigate();
     const token = sessionStorage.getItem('token');

    return (
        
    <>
    
     {!token && <Navigate to="/"  replace={true}/>} 

 <div  className="container-fluid"> 
      <h5 className="container-fluid-header text-light my-4">Componente Favoritos</h5>
        <div className="row my-card m-4">
        <Toaster/>
      {!props.favorites.length > 0 && <h3 className="text-light">Sin favoritos...</h3>}
    {
        props.favorites.map((oneMovie,idx) => {
            return (
           <div className="col-md-3 my-4 ">
    
             <Card style={{ width: '18rem' }}  key={idx}>
             {/* */}

             <button className="favourite-btn" onClick={ props.App.addOrRemoveFromFavs } data-movie-id={oneMovie.id}>💙</button>  

               <Card.Img  variant="top" src={oneMovie.img } alt="Sin imagen"/>
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
                 ) 
            })
    }
    </div>
    </div>

    </>
    )
}
export default Favoritos