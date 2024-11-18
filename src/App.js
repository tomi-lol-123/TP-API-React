import './App.css';
import "./miCss.css";
import dager from "./Dot Dager - profile picture.jpg"
import fernan from "./fernanfloo - profile picture.jpg"
import dross from "./dross - mamado.jpg"


function App() {

  
  
  return (
    <div className="fondo">

    <div className = "imagenes">
      <img src={dager} className="dager" />
      <img src={fernan} className="fernan" />
      <img src={dross} className="dross" />
    </div>


  
     

    </div>
    
  );
}

export default App;
