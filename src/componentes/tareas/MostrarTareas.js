import React, { Fragment } from 'react'
import Tarea from './Tarea'

const MostrarTareas = () => {
    /* Crea un objeto tareas*/
    const tareas =[
        {nombre:'Elegir Sistema Operativo', estado:true},
        {nombre:'Elegir Base de datos', estado:false},
        {nombre:'Elegir Lenguaje', estado:true},
        {nombre:'Elegir Frameworks', estado:false}
    ]
    return (
        <Fragment>
            {/* Presento el proyecto */}
            <div className="d-flex justify-content-center">
                <h2> <span className="text-danger">Proyectos:</span> Comercio Electronico </h2>
                <button 
                  type="button"
                  className="btn btn-outline-danger h-50 m-2"
                >Eliminar Proyecto</button>
            </div>
            {/* Lee el arreglo tareas y si no existe ni un dato en el arreglo presentara el mensaje no hay tareas*/}
              { tareas.length===0
                   ? (<h1>No hay Tareas</h1>)
                    /* Si hay datos en el arreglo se ejecuta el codigo para elaborar una tabla con todos los datos que 
                    incluya el arreglo*/
                   : (<div className="table-responsive">
                          <table className="table">
                              <thead>
                                  <tr>
                                      <th scope="col">Tarea</th>
                                      <th scope="col">Estado</th>
                                      <th scope="col">Editar</th>
                                      <th scope="col">Eliminar</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {/* aqui se recorreran todos los datos que contenga el arreglo tareas y por cada dato se llamara al componente Tarea
                                  y se ingresara  */}
                                  {tareas.map(tarea => {
                                      <Tarea tarea={tarea}/>
                                  })}
                              </tbody>
                          </table>

                   </div>)

              }
        </Fragment>

    )

}
export default MostrarTareas