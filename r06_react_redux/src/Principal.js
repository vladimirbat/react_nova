import React,{ Component } from 'react';
import InsertarFormConectado from './InsertarFormConectado';
import TablaPersonasConectado from './TablaPersonasConectado';
import './Principal.css';

// -------------- CONTENEDOR ------------------
class Principal extends Component{
  render(){
      console.log("render Principal");
      return  (
          <div>
              <InsertarFormConectado />
              <TablaPersonasConectado/>
          </div>
      );
  }
 
}

export default Principal;
