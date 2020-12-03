import React from 'react';
import moment from "moment";
export default class App extends React.Component {
constructor(){
  super();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  this.state={
     Date : new Date().toLocaleDateString('fr-FR', options)
  };
}
  handleChange (event){
   var number =  event.target.value;
   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.setState({number : number});
    var newdate= new Date() ;
    newdate.setDate(newdate.getDate() + number-9)
    this.setState({newDate : newdate.toLocaleDateString('fr-FR', options) })

  }
render(text){
  return <div>
  <input type="number" onChange={this.handleChange.bind(this)}/>
  
  <h1>days added :{this.state.number}</h1>
  <h1>current date :{this.state.Date}</h1>
  <h1>new date :{this.state.newDate}</h1>
  </div>
 
          
}


}





