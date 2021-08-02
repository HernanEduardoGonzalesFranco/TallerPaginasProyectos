import React from 'react'
import Proyecto from './Proyecto'

const MostrarProyecto = () => {
    const proyectos = [
        // proyectos es un arreglo que almacenara todos los proyectos que vayamos ingresando
        {nombre: 'Tienda Virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Diseño de un sitio web'}
    ]
    return(
        <div className="list-group">
            {proyectos.map(proyecto =>(
          /*       //aqui se recorreran todos los datos que contenga el arreglo proyectos y por cada dato se llamara al componente proyecto
                y se ingresara */
                <Proyecto proyecto={proyecto}/>
            ))}
        </div>
    )

}

export default MostrarProyecto