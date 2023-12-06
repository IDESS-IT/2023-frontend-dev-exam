import React from "react";
import ReactDOM from 'react-dom';
import Header from "./Headers/Header";
import SideBar from "./Sidebar/SideBar";


class App extends React.Component {
    render() {
      return ( <div>
        <Header />
        <SideBar />
      </div>
      );
    }
}
  ReactDOM.render( 
    <App /> ,
    document.getElementById("root"));

export default App;
