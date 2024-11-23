import './App.css';
import avatar from "./default icon.png";
import { useState} from "react";



export default function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }


  
    return (
        <div>
            <h1>Contadores que se actualizan separadamente</h1>
            <button onClick={handleClick}>
                hiciste click {count} veces
            </button>   
        </div>   
      );
}

function MyButton() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <button onClick={handleClick}>
        Hiciste clic {count} veces
      </button>
    );
  }
