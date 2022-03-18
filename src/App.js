import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Button from 'react-bootstrap/Button'
import navBar from './components/NavBar/navBar';


function App() {
  return (
    <div className="App">
      <navBar />
      <img src={logo} className="App-logo" alt="logo" />
        <Button />
      
    </div>
  );
}

export default App;
