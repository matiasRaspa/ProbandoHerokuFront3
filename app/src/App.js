import "./App.css";
import { useState, useEffect } from "react";

function App() {
  //Hooks
  // const[variable, metodo]= useState(valorInicial);
  const [opcion, setOption] = useState("hoteles");
  const [data, setData] = useState([]);

  //Los efectos secundarios dos parametros
  //useEffect(callback, [variable])
  let url = "https://pruebagcd.herokuapp.com/";
  useEffect(() => {
    const api = async () => {
      const response = await fetch(url + opcion);
      const json = await response.json();
      setData(json);
    };
    //Llamamos a la funcion
    api();
  }, [opcion]);

  const cambiarOpcion = () => {
    if (opcion === "hoteles") {
      setOption("paquetes");
    } else if (opcion === "paquetes") {
      setOption("ofertas");
    } else {
      setOption("hoteles");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
                              {/* Color del boton y my-5 es para los margenes (bajar el boton hacia abajo del 1 al 5) */}
          <button className="btn btn-danger my-5" onClick={cambiarOpcion}>
            Cambiar Opcion
          </button>
        </div>
        <div className="col-6 my-5">
          <ul className="my-5" type="none">
            {data.map((o, i) => {
              return <li className="m-3" key={i + o.nombre}>{o.nombre}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
