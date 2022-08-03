import logo from '../../logo.svg';
import './App.css';
import { check } from "../../http/dataApi";


function App() {

  check().then(data => {
    console.log(data)
  })

  return (
    <div className="App">

    </div>
  );
}

export default App;
