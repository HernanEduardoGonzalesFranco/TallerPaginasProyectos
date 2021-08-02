import React, { useState, useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Cuenta =(props)=>{

    //state para iniciar sesion
    const[usuario, guardarUsuario] = useState({
        nombre:'',
        email: '',
        password: '',
        confirmar: ''
    });

    //extraer de usuario
    const{nombre, email, password, confirmar}=usuario;

    const onChange=e=>{
        guardarUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        })
    }

    //cuando el usuario quiere iniciar sesion

    const onSubmit=e=>{
        e.preventDefault();

        //validar que no haya campos vacios//

        if(nombre.trim()=== '' ||
           email.trim()=== '' ||
           password.trim()=== '' || 
           confirmar.trim()=== '' ) {
               //mostrarAlerta('Todos los campos obligatorios','alerta)//
               alert('Todos los campos son obligatorios');
               return;
            }

        //password minimo de 6 caracteres
        if (password.length < 6){
            //mostrarAlerta('El password debe ser de al menos 6 caracteres')
            alert('El password debe ser de al menos 6 caracteres');
            return;
        }

        //los 2 passwords son iguales
        if (password !== confirmar){
            //mostrarAlerta('Los passwords no son iguales','alerta=error')
            alert('Los passwords no son iguales','alerta=error');
            return;
        }

    }


    return (
        <div className="container">
        <div className="row d-flex justify-content-center mt-5">
            <div className="col-10 col-sm-8 col-md-6 col-lg-4">
                <div className="card border-dark border-2 bg-gradient bg-danger">
                  <div className="card-body">
                   <h2 className="text center">Obtener una Cuenta</h2>
                   <form onSubmit={onSubmit}>
                       <div className='row'>
                       <div className='col-md-12'>
                           <div className="input-group mb-3">
                               <div className="input-group-prepend">
                                   <span className="input-group-text text-white">👦 :{usuario ? usuario.nombre: "Usuario no registrado"}</span>
                                  </div>
                                      <input
                                          type="nombre"
                                          className="form control"
                                          placeholder="Tu nombre"
                                          name="nombre"
                                          aria-describedby="basic-addon1"
                                          value={nombre}
                                          onChange={onChange}
                                    />
                                  </div>
                             </div>
                          </div>
                          <div className='row'>
                              <div className='col-md-12'>
                                 <div className="input-group mb-3">
                                      <div className="input-group-prepend">
                                        <span className="input-group-text text-green">💌:{usuario ? usuario.email:"Email incorrecto"}</span>
                                      </div>
                                      <input
                                         type="email"
                                         className="form-control"
                                         placeholder="Tu email"
                                         name="email"
                                         aria-describedby="basic-addon2"
                                         value={email}
                                         onChange={onChange}
                                    />
                                   </div>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col-md-12'>
                                 <div className="input-group mb-3">
                                      <div className="input-group-prepend">
                                        <span className="input-group-text text-green">👀:{usuario ? usuario.password:"Ingrese una contraseña correcta"}</span>
                                      </div>
                                      <input
                                         type="password"
                                         className="form-control"
                                         placeholder="Tu password"
                                         name="password"
                                         aria-describedby="basic-addon3"
                                         value={password}
                                         onChange={onChange}
                                    />
                                   </div>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col-md-12'>
                                 <div className="input-group mb-3">
                                      <div className="input-group-prepend">
                                        <span className="input-group-text text-green">👀:{usuario ? usuario.confirmar:"No coinciden las contraseñas"}</span>
                                      </div>
                                      <input
                                         type="password"
                                         className="form-control"
                                         placeholder="Confirmar password"
                                         name="confirmar"
                                         aria-describedby="basic-addon4"
                                         value={confirmar}
                                         onChange={onChange}
                                    />
                                   </div>
                              </div>
                          </div>
                          <div className='row'>
                               <div className='col-md-6 text-center'>
                                    <div className="campo-form">
                                        <input type="submit" className="btn btn-dark btn-gradient"value="Registrarme"/>
                                    </div>
                                  <div className='col-md-6 text-center'>
                                    <Link to={'/'} className="btn btn-outline-light btn-gradient">
                                        Iniciar sesion
                                    </Link>
                                  </div>
                                </div>
                            </div>        
                </form>
            </div>
        </div>
    </div>
</div>
</div>
    )
}
export default Cuenta