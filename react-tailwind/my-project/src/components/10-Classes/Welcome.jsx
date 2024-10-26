import React from 'react';
class WelcomeMessage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nom : "",
            salutation: "Welcome",
            
        }
    }
    handleSave = () => {
        // return salutation = this.state.salutation + this.state.nom NOT LIKE THAT !!!
        // We change other key values using the this.setState 
        // We access to key values using the this.state
        // While using state variable we are always using OBJECTS Pay attention !
        this.setState({
            salutation : "Welcome"  + " " +this.state.nom,
            nom:"",
        })
    }
    // inside render there is only the return part no functions 
    render(){
        return (
            <>
                <h1>{this.state.salutation}</h1>
                <input type="text" name="nom" value={this.state.nom} onChange={(e)=>this.setState({nom:e.target.value})} />
                {/* this.setState is not a function its variable that we access with the class let us change the key values 
                    by accessing the object "this.state"
                    (e)=>this.setState({nom:e.target.value}) this is an arrow function 
                */}
                <button onClick={this.handleSave}>Afficher</button>
            </>
        )
    }
}
export default WelcomeMessage