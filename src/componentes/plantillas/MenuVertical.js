import React from 'react'
import CrearProyecto from '../proyectos/CrearProyecto'
import MostrarProyectos from '../proyectos/MostrarProyectos'

function MenuVertical(){

    return(
        <aside className="text-center p-4">
            <h2 className="fst-italic text-danger bg-success bg-gradient">Guardar Proyecto</h2>
            <CrearProyecto/>
            <h3 className="text-light border border-bottom fw-bold">Panel De Proyectos</h3>
             <MostrarProyectos/>  
        </aside>
    )
}
export default MenuVertical