import React from "react";
import ReactDOM from 'react-dom';
import Main_Page from "components/Main_Page";
import "./App.css";

class App extends React.Component {
    render() {
      return ( <div> 
        <Main_Page />
      </div>
      );
    }
}
  ReactDOM.render( 
    <App /> ,
    document.getElementById("root"));

export default App;
