import React ,{ Component } from 'react';



class Dashboard extends Component {
   constructor(props){
     super(props);
     this.state={
       items:[],
     }
   }

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

render(){
  var { items } =this.state;
 
  return (
    <div className="App">
      <header className="App-header">
      <h1> Users </h1>
       {items.map(item=>{
        
         {
            return <ul>
         <li key={item.id}>{item['id']}---{item['email']}---{item['name']}---{item['username']}</li>
         </ul> 
         }
        

       })}
       
      </header>
      
    </div>
  );
}
}

export default Dashboard;
