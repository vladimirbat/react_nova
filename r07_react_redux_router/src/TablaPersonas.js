import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
// --------------- PRESENTACIÓN --------------
class TablaPersonas extends Component{
    render(){
        console.log("render TablaPersonas");
        return (<table>
            <thead>
                <tr><th>DNI</th><th>Nombre</th><th>Apellidos</th><th>Saldo</th><th>Acciones</th></tr>
            </thead>
            <tbody>
                {this.props.personas.map(p=>
                        (<tr key={p.dni}>
                            <td>{p.dni}</td><td>{p.nombre}</td><td>{p.apellidos}</td>
                            <td>{p.saldo}</td>
                            <td>
                                <button onClick={(event)=>this.borrar(p.dni)}>&times;</button>
                                {' '}
                                <Link to={"/detalle/" + p.dni}>ver</Link>
                            </td>
                        </tr>)
                )}
            </tbody>
        </table>);
    }
    borrar(dni){
        this.props.borrarPersona(dni);
    }
}
export default TablaPersonas;