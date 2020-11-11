import React from 'react';
import Button from './components/button';

function App() {
  const mostrarMensaje = () => {
    console.log('Click en boton');
  };

  const mostrarMensajeAlternativo = () => {
    console.log('Click en boton 2');
  };

  return (
    <div>
      <Button label="Hola mundo" onClick={mostrarMensaje} />
      <Button label="Boton 2" onClick={mostrarMensajeAlternativo} />
    </div>
  );
}

export default App;
