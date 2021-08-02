import React from 'react'

const Proyecto =({proyecto}) => {

    return(
        /* Lo unico que hace es presentar un proyecto recibiendo lo datos del arreglo 'proyecto'
        el cual esta ubicado en el componente MenuVertical */
        <button className="list-group-item list-group-item-action list-group-item-secondary"
        
        type="button"
        
        >{proyecto.nombre } </button>
    
        )
}

export default Proyecto