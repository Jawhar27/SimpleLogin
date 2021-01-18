import React ,{ Component } from 'react';


class Login extends Component {
   
    state={
        email:null,
        password:null,
        items:[],
    }

//getting records
  componentDidMount(){
    let url="http://localhost:4300/rest/index.php";
    fetch(url,{
      method:'GET',
      headers:{
        'Accept':'application/json',
        'Content-TYpe':'application/json',
      }
    }).then(result=>result.json()).then(json=>{
      this.setState({
        items:json,
      })
    })
        
      
    
  }

//getting inputs from user and stores into state
    handleChange=(e)=>{
      this.setState({
        [e.target.id]:e.target.value
      })
    
    }

// submiting the user login phase
    handleSubmit=(e)=>{
       e.preventDefault();   
      var { items } =this.state; 
      
     
          {items.map(item=>{
        
        if(item['email']===this.state.email && item['password']===this.state.password){
          console.log("You are logged In");
          return null;
        }
        else{
          console.log("You are Not logged In");
          
        }
        

       })}


    }

render(){

 
  return (

     <div className="login-form" style={{margin:50}}>
     <h1 style={{color:'red'}}>Login</h1>
     <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">email:</label>
            <input type="text" id="email" onChange={this.handleChange}/><br/><br/>
                <label htmlFor="password">Password:</label>
            <input type="password" id="password"onChange={this.handleChange}/><br/><br/>
            <button>Login</button>
       </form>
     </div>
     
  );
}
}

export default Login;




