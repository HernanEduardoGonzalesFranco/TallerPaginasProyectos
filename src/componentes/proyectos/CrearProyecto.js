import React, { useState } from 'react'

const CrearProyecto = () => {
    //state para proyectos

    const [proyecto, guardarProyecto] = useState({nombre:''})
    const [formulario, setFormulario] = useState(false)
    const {nombre} = proyecto 

    const activarFormulario = () => {
        setFormulario(!formulario)
    }

    //guardar en el state los contenidos del input

    const onChange = e => {
        guardarProyecto({...proyecto,[e.target.name]:e.target.value})
    }

    //guardar el proyecto

    const onSubmit = e => {
        e.preventDefault();
        //validar el formulario
        if(nombre.trim() === ''){
            alert('Todos los campos son obligatorios');
        }
    }

    return(
        <>
        <div className="d-grid pb-2">
            <button className="btn btn-outline-light text-danger fw-bold fs-2"
                    type="button"
                    onClick={activarFormulario}
                    > Nuevo Proyecto</button>
        </div>
        { formulario
          ? (< form onSubmit={onSubmit}>
                 <div className='row'>
                     <div className='col-md-12'>
                         <div className="input-group my-2">
                             <div className="input-group-prepend">
                                 <span className="input-group-text text-dark"></span>
                             </div>
                             <input
                                 type="text"
                                 className="form-control fs-2"
                                 placeholder="Nombre Proyecto"
                                 name="nombre"
                                 value={nombre}
                                 onChange={onChange}
                             />
                         </div>
                     </div>
                 </div>
                 <div className='row'>
                     <div className='col-md-12 text-center mb-4'>
                         <div className="d-grid">
                             <input
                                 type="submit"
                                 className="btn btn-success"
                             />
                         </div>
                     </div>
                 </div>
          </form>
          )
        : null
        }
        </>
    )
}

export default CrearProyecto