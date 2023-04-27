

import { useNavigate } from 'react-router-dom';
import Buscador from './Buscador';

function Header(){
    const navigate = useNavigate();
    
    
  
    return(
        <>

        <header>
        
        <nav className="navbar navbar-expand-lg navbar-black bg-light rounded border-3">
  <div className="container-fluid">
    <a className="navbar-brand" href="/Listado">Jauncho Peliculas</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href=""  onClick={() => navigate("/Listado",{remplace :true})}>Listado</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=""  onClick={() => navigate("/Favoritos",{remplace :true})}>Favoritos</a>
        </li>

        <li className="nav-item">
          <a className="nav-link " href="/" tabindex="-1" aria-disabled="true" onClick={this}>Cerrar</a>
        </li>
      </ul>
      
      <Buscador/>

    </div>
  </div>
</nav>


    </header>
                
       
       
       
       


        </>



    )

}
export default Header