import MainGrid from "../../componentes/Maingrid";
import "./contatos.css";

function Contatos(props) {
  return (
    <div className="ContatosPage" id={props.id}>
      <head className="ContatosHeader">
        <h1>Entre em contato com Post-it</h1>
        <MainGrid>
          <box>
            <h2>SIGA POST-IT NAS SUAS REDES SOCIAIS</h2>
            <img
              className="Img"
              src="https://image.flaticon.com/icons/png/512/1384/1384060.png"
              width="60"
              height="60"
            />
            <img
              className="Img"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              width="60"
              height="60"
            />
            <img
              className="Img"
              src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Facebook_icon_2013.svg"
              width="60"
              height="60"
            />
          </box>
          <box>
            <h2>Ligue</h2>
            <h3>
              Atendimento ao Cliente: <br />
              0800 013 23 33 <br />
              <br />
              Ligue de Segunda a Sexta 8:15 - 17:00 (Horário Central)
            </h3>
          </box>
          <box>
            <br />
            3M e Post-it são marcas registradas da 3M
          </box>
        </MainGrid>
      </head>
    </div>
  );
}

export default Contatos;
