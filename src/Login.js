import React ,{ Component } from 'react';



class Login extends Component {
   
    state={
        email:null,
        password:null,
        items:[],
        isvalid:false,
        error:null,
      
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
          alert("You are logged In");
          this.setState({
            isvalid:true
          })
          
          //redirect to dashboard
           return ;
        }
        else{
          this.setState({
            isvalid:false,
            error:'Please Check the credentials that you entered !'
          })
          console.log("You are Not logged In");
          
        }
        

       })}


    }

render(){

 
  return (
    var { error }=this.state;

     <div className="login-form" style={{margin:50}}>
     <h1 style={{color:'red',"margin-left":70}}>Login</h1>
     <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">User email:</label>
            <input type="text" id="email" onChange={this.handleChange}/><br/><br/>
                <label htmlFor="password">Password    :</label>
            <input type="password" id="password"onChange={this.handleChange}/><br/><br/>
            <button style={{"margin-left":70,"width":100}}>Login</button>
            error===null?():<h1>error</h1>
       </form>
     </div>
     
  );
}
}

export default Login;




