import React, {Component}  from "react";






class ContactInput extends Component{
    constructor(){
        super()
    
        this.state={
            firstName:"Oliwia"

        }
    }
      
    
    
    render(){
      return(
        <div>
    
            <form>
            <label htmlFor="firstName"></label>
            <input type="text" id="firstName" value={this.state.firstName}></input>
     
    
            </form>
    
        </div>
      )
    }
    
    
    
    }









class Contact extends Component{
constructor(){
    super()

    this.state={
        firstName:"Oliwia"
    }
}
  


render(){
  return(
    <div>
        <div id="firstName">{this.state.firstName}</div>


        {/* <form>
        <label htmlFor="firstName"></label>
        <input type="text" id="firstName" value={this.state.firstName}></input>
        <button type="submit">Submit</button>
        <button>Edit</button>
        </form> */}

    </div>
  )
}



}

export default Contact;
export {ContactInput};