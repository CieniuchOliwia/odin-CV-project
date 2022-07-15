import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import React, {Component}  from "react";
import Contact, {ContactInput} from "./Contact";

class App extends Component{

constructor(){
  super()

  this.state={
    isButtonClicked:false
  }
  this.editFirstName=this.editFirstName.bind(this)
}


editFirstName(){
  this.setState({isButtonClicked:true});
}

render(){ 
  
      if(this.state.isButtonClicked){
        return  <ContactInput />
      }else{
        return <div>
          <Contact />
          <button onClick={this.editFirstName}>Edit</button>
          </div>
      }
  
}



}

export default App;