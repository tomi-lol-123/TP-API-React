import React, { useState, useEffect } from "react";

function App() {
  const [numeroSecreto, setNumeroSecreto] = useState("");
  const [repetirCifras, setRepetirCifras] = useState(false);
  const [intentos, setIntentos] = useState(10);
  const [historial, setHistorial] = useState([]);
  const [entrada, setEntrada] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Genera un número aleatorio al inicio del juego
  useEffect(() => {
    generarNumero();
  }, [repetirCifras]);

  const generarNumero = () => {
    let numero = "";
    const digitos = "0123456789".split("");

    while (numero.length < 4) {
      const aleatorio = digitos[Math.floor(Math.random() * digitos.length)];
      if (repetirCifras || !numero.includes(aleatorio)) {
        numero += aleatorio;
      }
    }
    setNumeroSecreto(numero);
    setIntentos(10);
    setHistorial([]);
    setMensaje("");
    setEntrada("");
  };

  const verificarNumero = () => {
    if (entrada.length !== 4 || isNaN(entrada)) {
      setMensaje("Por favor, ingresa un número válido de 4 cifras.");
      return;
    }

    let bien = 0;
    let regular = 0;
    let mal = 0;

    const digitosSecreto = numeroSecreto.split("");
    const digitosEntrada = entrada.split("");

    digitosEntrada.forEach((digito, i) => {
      if (digito === digitosSecreto[i]) {
        bien++;
      } else if (digitosSecreto.includes(digito)) {
        regular++;
      } else {
        mal++;
      }
    });

    const resultado = `${bien}B ${regular}R ${mal}M`;
    setHistorial([...historial, { entrada, resultado }]);

    if (bien === 4) {
      setMensaje("¡Felicidades! Has adivinado el número.");
    } else if (intentos - 1 === 0) {
      setMensaje(`¡Perdiste! El número era ${numeroSecreto}.`);
    } else {
      setIntentos(intentos - 1);
    }

    setEntrada("");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>¡Adivina el Número!</h1>
      <p>Intentos restantes: {intentos}</p>
      <p>{mensaje}</p>

      <div style={{ marginBottom: "10px" }}>
        <label>
          <input
            type="checkbox"
            checked={repetirCifras}
            onChange={() => setRepetirCifras(!repetirCifras)}
          />
          Permitir repetición de cifras
        </label>
      </div>

      {mensaje === "" && (
        <>
          <input
            type="text"
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
            maxLength="4"
            placeholder="Ingresa tu número"
            style={{ width: "150px", textAlign: "center" }}
          />
          <button onClick={verificarNumero} style={{ marginLeft: "10px" }}>
            Probar
          </button>
        </>
      )}

      <button onClick={generarNumero} style={{ marginTop: "10px" }}>
        Reiniciar Juego
      </button>

      <h3>Historial</h3>
      <ul>
        {historial.map((item, index) => (
          <li key={index}>
            <strong>{item.entrada}</strong> - resultado: {item.resultado}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
