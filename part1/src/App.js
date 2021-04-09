import './App.css';
import Mensaje from './Mensaje.js'
import Descripcion from './Descripcion.js'

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' msg='Estamos trabajando' />
      <Mensaje color='green' msg='En un curso'/>
      <Mensaje color='yellow' msg='De react'/>
      <Descripcion message='Esta es la app del curso fullstack bootcamp pasa mensaje'/>
    </div>
  );
}

export default App;
