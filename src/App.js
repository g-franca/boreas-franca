import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Button from 'react-bootstrap/Button'
import NavBar from './components/NavBar/NavBar';
import Titulo from './components/Titulo/titulo';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Titulo />
      <img src={logo} className="App-logo" alt="logo" />
        <Button />
      
    </div>
  );
}

export default App;
