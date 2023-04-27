import axios from "axios";
import swAlert from "@sweetalert/with-react";
import Swal from 'sweetalert2'
import {  useNavigate } from 'react-router-dom';

function Login(){
    

    // funtion useNavigate allow  to charge a new element
    const token = sessionStorage.getItem('token');
    let  navigate = useNavigate();

        const submitHandler = e => {
            //this function preventDefault sent to informations of form and it doesn't allow refreshing
            e.preventDefault();
           // console.log('Se va a enviar el formulario');
    
            //this const catching the data of form
            const email = e.target.email.value;
            const password = e.target.password.value;
    
            const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    
    
               if (email === '' || password === '') {
                   Swal.fire({
                       icon: 'error',
                       title: 'Oops...',
                       text: 'los campos no pueden estar vacios!',
                      // footer: '<a href="">Veficia la informacion</a>'
                     })
    
                 //  swAlert(<h2>los campos no pueden estar vacios</h2>);
                       
                   
                return
                }
    
             //regexEmail verify the email ;
                if (email !== '' && !regexEmail.test(email)) {
                      swAlert(<h2>debes escribir un correo valido</h2>);
                   return
                  }
    
                if(email !== 'challenge@alkemy.org' &&  password !== 'react') {
                    swAlert(<h2>Credenciales invalido</h2>);
                
                return
                }
                
                else{
                    
            axios
            .post('http://challenge-react.alkemy.org',{email,password})
            .then(res => {
               //console.log(res.data);
                var tokenRec = res.data.token;
                sessionStorage.setItem('token',JSON.stringify(tokenRec));
                //console.log(localStorage.getItem('token'));
                //console.log(localStorage);
               console.log(res);
               
                navigate('/Listado');
              
                               //swAlert confirmations
                Swal.fire({
                 position: 'center',
                 icon: 'success',
                 title:'Sesion Iniciada',
                 showConfirmButton: false,
                 timer: 1500
                  }
                  ) //end Swal.fire         
                 
  

                }) //ende .then
            }
        }




    

    return(
        <>
      

        <div className="container-fluid m-4 ">   
        <div className="row">   
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <div className="card"> 
            <div className="card-body">
            <h4 className="card-title">Incio de Sesión</h4>
            <form onSubmit={submitHandler}>
            <label>
                <span>Correo Electronico: </span><br/>
            <input type="email" name="email"/> 
            </label>
            <br/>
            <label>
            <span>Contraseña: </span><br/>
             <input type="password" name="password"/> <br/>      
             </label>
             <br/>
             <br/>
            <button type="submit" className="btn btn-success">Ingresar</button> 
                                                 
        </form> 
                </div>
            </div>
        </div>

        </div>  
        
        </div>
        </>
    )
}
export default Login;