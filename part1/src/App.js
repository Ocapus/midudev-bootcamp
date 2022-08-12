import './App.css';
import Mensaje from './Mensaje.js';


const Descripcion = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}


const App = () => {
  return (
    <div className="App">
      <Mensaje color = 'red' message ='Estamos trabajando'/>
      <Mensaje color = 'blue' message ='en un curso'/>
      <Mensaje color = 'green' message ='de React'/>
      <Descripcion />
    </div>

  );
}

export default App;

