import * as React from "react";
import YouTube from 'react-youtube';

class Conference extends React.Component {

  render() {
    return (
<div className="blocktext">
  <h4> Conférence spectacle sur l'héritage :</h4>
  <YouTube
	videoId="DC1DL7cRGco"
  />

Cette conférence est en court d'écriture et est amenée à évoluer. J'aimerais collaborer avec des professionnel·le·s de la culture afin de rendre cette conférence aussi plaisante et didactique que possible. Si vous êtes acteur·rice ou metteur·se en scène et que cela vous intéresse, n'hésitez pas à me contacter.
<br/><br/>
Je peux aussi jouer la conférence bénévolement à la demande. 
</div>
    );
  }
}

export default Conference;
