import { Navigate } from 'react-router-dom';

import Cards from '../components/Cards';

function Listado (props){
    const token = sessionStorage.getItem('token');

    function getDateToday () {
    const hoy = new Date();
    
    return hoy.toLocaleDateString();
    }

    function submitCloserSession() {
        sessionStorage.clear();
        window.location.reload();
        
    }

    return (
        <>
        {!token && <Navigate to="/"  replace={true}/>}
        <div className="container-fluid text-center text-light">{getDateToday()}</div>
                   <Cards List={{props}}/>
            <br/>
            <form onSubmit={ submitCloserSession}>
            <button className="btn btn-outline-secondary" type="submit" >Cerrar Session</button> 
            </form>
       
        </>
        
    )
}

export default Listado









