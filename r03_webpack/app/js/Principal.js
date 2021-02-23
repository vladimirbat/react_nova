import React from "react";

class Principal extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>Aplicación React</h1>
                <img src="img/casa.gif"/>
            </div>
        );
    }
}

export default Principal;