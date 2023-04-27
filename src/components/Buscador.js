import Swal from 'sweetalert2'
import {useNavigate, Navigate } from 'react-router-dom';
function Buscador() {
    const token = sessionStorage.getItem('token');


    var keywords={};
    const navigate = useNavigate();
    const submitHandler = e => {
        e.preventDefault();
        const keyword   = e.currentTarget.keyword.value;
        
        keywords=keyword;
        if(keyword.trim().length < 4) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'los campos no pueden estar vacios o tener menos de 4 letras!',
               // footer: '<a href="">Veficia la informacion</a>'
              }) //end Swal
        }// end if
        else{
            console.log('rediccione');
            rediccione();
            e.currentTarget.keyword.value = '';

        }
        

    }//end submitHandler

    function rediccione(e){
            
        navigate(`/Resultados?keyword=${keywords}`,{replace:true});
        window.location.reload();
    
    }
       
    return(
        <>
        {!token && <Navigate to="/"  replace={true}/>}
             <form className="d-flex" onSubmit={submitHandler}>
             <input className="form-control me-2" type="search" name="keyword" placeholder="Buscar..." aria-label="Search"/>
             <button className="btn btn-outline-success" type="submit" >Buscar</button>
             </form>
             
        </>
    );


}
export default Buscador;