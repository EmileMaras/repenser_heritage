import * as React from "react";
import YouTube from 'react-youtube';

class Conference extends React.Component {

  render() {
    return (
<div className="blocktext">
  <h4> Conférence sur l'héritage :</h4>
Dans cette conférence
  <YouTube
	videoId="DC1DL7cRGco"
  />
</div>
    );
  }
}

export default Conference;
