import "./portifolio.css";
import Maingrid from "../../componentes/Maingrid";

function Portifolio(props) {
  return (
    <div className="PortifolioPage" id={props.id}>
      <head className="PortifolioHeader">
        <h1>Compras Individuais</h1>
      </head>
      <body className="PortifolioBody">
        <h4>
          <Maingrid>
            <box className="Box">
              <box className="Box">
                <a
                  href="https://www.amazon.com.br/Bloco-Adesivas-Post-Reposicionavel-Amarelo/dp/B0778SXM4F?ref_=ast_sto_dp&th=1"
                  target="_blank"
                >
                  Bloco de Notas Super Adesivas Post-it®, Rosa, 76 mm x 102 mm,
                  90 Folhas
                </a>
                <img
                  src={
                    "https://multimedia.3m.com/mws/media/1579071P/657-post-it-rosa-76-x-102mm-90f.jpg"
                  }
                  width="250"
                  height="200"
                />
              </box>

              <box className="Box">
                <a
                  href="https://www.amazon.com.br/Bloco-Notas-Post-Reposicionavel-Rosa/dp/B0778SJ9HL?ref_=ast_sto_dp&th=1&psc=1"
                  target="_blank"
                >
                  Bloco de Notas Super Adesivas Post-it®, Pink Neon, 76 mm x 76
                  mm, 90 Folhas
                </a>
                <img
                  src={
                    "https://multimedia.3m.com/mws/media/1579067P/654-post-it-azul-76-x-76mm-90f.jpg"
                  }
                  width="250"
                  height="200"
                />
              </box>

              <box className="Box">
                <a
                  href="https://www.amazon.com.br/Bloco-Notas-Post-Reposicionavel-Rosa/dp/B077SVG93L?ref_=ast_sto_dp&th=1"
                  target="_blank"
                >
                  Notas SuperAdesivas Post-it®, Verde, 76 mm x 76 mm, 90 Folhas
                </a>
                <img
                  src={
                    "https://multimedia.3m.com/mws/media/1579052P/refil-pop-up-limao-76-x-76mm-90f.jpg"
                  }
                  width="250"
                  height="200"
                />
              </box>
            </box>
            <box>
              <box className="Box">
                <a
                  href="https://www.amazon.com.br/Bloco-Notas-Post-Reposicionavel-Rosa/dp/B0778Y4LB8?ref_=ast_sto_dp&th=1"
                  target="_blank"
                >
                  Bloco de Notas Super Adesivas Post-it®, Azul, 76 mm x 76 mm,
                  90 Folhas
                </a>
                <img
                  src={
                    "https://multimedia.3m.com/mws/media/1579057P/654-post-it-pink-neon-76-x-76mm-90f.jpg"
                  }
                  width="250"
                  height="200"
                />
              </box>

              <box className="Box">
                <a
                  href="https://www.amazon.com.br/Bloco-Notas-Adesivas-Post-Reposicionavel/dp/B0778SSST6?ref_=ast_sto_dp&th=1"
                  target="_blank"
                >
                  Bloco de Notas Super Adesivas Post-it®, Azul, 76 mm x 102 mm,
                  90 Folhas
                </a>
                <img
                  src={
                    "https://multimedia.3m.com/mws/media/1579060P/657-post-it-recicl-azul-76-x-102mm-90f.jpg"
                  }
                  width="250"
                  height="200"
                />
              </box>

              <box className="Box">
                <a
                  href="https://www.amazon.com.br/Bloco-Notas-Adesivas-Post-Reposicionavel/dp/B0778RP249?ref_=ast_sto_dp&th=1"
                  target="_blank"
                >
                  Bloco de Notas Super Adesivas Post-it®, Verde, 76 mm x 102 mm,
                  90 Folhas
                </a>
                <img
                  src={
                    "https://multimedia.3m.com/mws/media/1735054P/post-it-657-green-76mm-x-102mm-90-sheets.jpg"
                  }
                  width="250"
                  height="200"
                />
              </box>
            </box>

            <box>
              <box className="Box">
                <a
                  href="https://www.amazon.com.br/REFIL-76X76-AMARELO-SOL-90F/dp/B0958NXKC3?ref_=ast_sto_dp"
                  target="_blank"
                >
                  Bloco de Notas Adesivas Post-it®, Amarelo, 76 mm x 76 mm, 100
                  Folhas
                </a>
                <img
                  src={
                    "https://multimedia.3m.com/mws/media/1579047P/654-am-100f-76-x-76mm-ht.jpg"
                  }
                  width="250"
                  height="200"
                />
              </box>

              <box className="Box">
                <a
                  href="https://www.amazon.com.br/POST-IT%C2%AE-AMARELO-SOL-76X102MM-90F/dp/B0958MMWHJ?ref_=ast_sto_dp"
                  target="_blank"
                >
                  Bloco de Notas Adesivas Post-it®, Amarelo, 76 mm x 102 mm, 100
                  Folhas
                </a>
                <img
                  src={
                    "https://multimedia.3m.com/mws/media/1579048P/657-am-100f-76-x-102mm-ht.jpg"
                  }
                  width="250"
                  height="200"
                />
              </box>

              <box className="Box">
                <a
                  href="https://www.amazon.com.br/dp/B0778NQDBD?tag=cc_br_45_101314-20&linkCode=ogi&th=1&psc=1&smid=A3JWKAKR8XB7XF"
                  target="_blank"
                >
                  Blocos de Notas Adesivas Post-it® Tropical, 38 mm x 50 mm, 200
                  Folhas
                </a>
                <img
                  src={
                    "https://multimedia.3m.com/mws/media/1579045P/653-post-it-tropical-50f.jpg"
                  }
                  width="250"
                  height="200"
                />
              </box>
            </box>
          </Maingrid>
        </h4>
      </body>
    </div>
  );
}

export default Portifolio;
