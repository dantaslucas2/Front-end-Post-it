import Player from "../../componentes/video/ResponsivePlayer";
import "./home.css";
import { render } from "react-dom";
import ReactPlayer from "react-player";

function Home(props) {
  return (
    <div className="HomePage" id={props.id}>
      <Player url="../../video/post.mp4" />
      <head className="HomeHeader"></head>
    </div>
  );
}

export default Home;
