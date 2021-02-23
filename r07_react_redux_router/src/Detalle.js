import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
// --------------- PRESENTACIÓN --------------
class Detalle extends Component{
    componentWillMount(){
        this.props.detallePersona(parseInt(this.props.match.params.dni));
    }
    render(){
        console.log("render TablaPersonas");
        
        return (
            <div>
                <h1>Detalle de la persona con dni 
                    {" " + this.props.match.params.dni}</h1>
                <h2>Url cargada 
                    {" " + this.props.match.url}</h2>
                <table>
                    <thead>
                        <tr><th>DNI</th><th>Nombre</th><th>Apellidos</th>
                            <th>Saldo</th></tr>
                    </thead>
                    <tbody>
                        { this.props.persona && <tr>
                            <td>{this.props.persona.dni}</td>
                            <td>{this.props.persona.nombre}</td>
                            <td>{this.props.persona.apellidos}</td>
                            <td>{this.props.persona.saldo}</td>
                        </tr>}
                    </tbody>
                </table>
            </div>);
    }
    borrar(dni){
        this.props.borrarPersona(dni);
    }
}
export default Detalle;