import React from "react";
import NavBar from "../NavBar/NavBar";
// Functional component 
function Header(){
let title = "Trattoria D'Oro"
    return (
            <React.Fragment>
                    <NavBar />
                    <span>Logo <h1> {title} </h1></span> <br/> <br/>
                    <span>This is our component</span> <br/> <br/> <br/>
            </React.Fragment>
    )
}
export default  Header ;