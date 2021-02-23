import React,{ Component } from 'react';
import InsertarForm from './InsertarForm';
import TablaPersonas from './TablaPersonas';
import {store} from "./reductorPrincipal";
import './Principal.css';

// -------------- CONTENEDOR ------------------
class Principal extends Component{
  constructor(props){
      super(props);
      store.subscribe(this.actualizar.bind(this));
      this.state = {personas:store.getState().personasMostradas};
  }
  render(){
      console.log("render Principal");
      return  (
          <div>
              <InsertarForm pesonaInsertada=
                          {this.insertarUno.bind(this)}/>
              <TablaPersonas personas={this.state.personas} 
                  borrarPersona={this.borrarUno.bind(this)}/>
          </div>
      );
  }
  insertarUno(nuevo){
      store.dispatch({type:"INSERTAR",nuevo:nuevo});
  }
  borrarUno(dni){
      store.dispatch({type:"BORRAR",dni:dni});
  }
  actualizar(){
      this.setState({personas:store.getState().personasMostradas});
  }
}

export default Principal;
