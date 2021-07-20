import './formulario.css';

function Formulario() {
  return (
      <div className="FormularioPage">
          <head className="FormularioHeader">
            <h1>Reserva de Blocos Post-it</h1>
            <h2>
              Nome:
              <input  className="Input"></input><br/><br/>
              Telefone:
              <input  className="Input"></input><br/><br/>
              E-mail:
              <input className="Input"></input><br/><br/>
              Modelo:
              <input  className="Input"></input><br/><br/>
              Quantidade:
              <input className="InputNumber" type= "number" min= "1" max= "1000"></input><br/><br/>
              <button className= "Button"type="submit"> Reservar</button><br/><br/>
            </h2>
          </head>
      </div>
    
  );
}

export default Formulario;
