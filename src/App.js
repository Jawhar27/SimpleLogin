import React ,{ Component } from 'react';
import Login from './Login.js';
import Dashboard from './Dashboard.js';


class App extends Component {
   constructor(props){
     super(props);
     this.state={
       items:[],
     }
   }



render(){
  var { items } =this.state;
 
  return (
    <div className="App">
      <header className="App-header">
      <h1> Users </h1>
      <Dashboard />
       
      </header>
      <Login  />
    </div>
  );
}
}

export default App;
