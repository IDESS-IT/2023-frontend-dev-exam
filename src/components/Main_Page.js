import React from "react";
import ReactDOM from 'react-dom';
import Header from "./Headers/Header";


class App extends React.Component {
    render() {
      return ( <div>
        <Header />
      </div>
      );
    }
}
  ReactDOM.render( 
    <App /> ,
    document.getElementById("root"));

export default App;
