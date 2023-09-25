import React from 'react';
import '../hojas-de-estilo/testimonio.css'

function Testimonio (props){
    return(
      <div className='contenedor-testimonio'>
        <img 
        className='imagen-testimonio' 
        src={require(`./imagenes/${props.imagen}.jpg` )} 
        alt='Foto de emma' />
        <div className ='contenedeor-texto-testimnio'>
          <p className='nombre-testimonio'><strong>{props.nombre}</strong>{props.pais}</p>
          <p className = ' cargo-testimonio'>{props.cargo}<strong>{props.empresa}</strong></p>
          <p className = 'texto-testimonio'>"{props.testimonio}"</p>
        </div>
      </div>
    )
}
export default Testimonio;