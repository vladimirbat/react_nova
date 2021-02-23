import React,{ Component } from 'react';
// --------------- PRESENTACIÓN --------------
class InsertarForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            persona:{dni:'',nombre:'',apellidos:'',saldo:''}
        };
    }
    render(){
        console.log("render InsertarForm");
        return (<div className="panel">
            dni <input type="text" name="dni" value={this.state.persona.dni}
                    onChange={this.cambio.bind(this)}/><br/>
            nombre <input type="text" name="nombre" value={this.state.persona.nombre}
                    onChange={this.cambio.bind(this)}/><br/>
            apellidos <input type="text" name="apellidos" value={this.state.persona.apellidos}
                    onChange={this.cambio.bind(this)}/><br/>
            saldo <input type="text" name="saldo" value={this.state.persona.saldo}
                    onChange={this.cambio.bind(this)}/><br/>
            <p className="botones">
                <button onClick={this.insertar.bind(this)}>
                    Insertar</button></p>
        </div>);
    }
    cambio(event){
        let persona = Object.assign({},this.state.persona);
        persona[event.target.name]=event.target.value;
        this.setState({persona:persona});
    }
    insertar(event){
        this.props.pesonaInsertada(this.state.persona);
        this.setState({
            persona:{dni:'',nombre:'',apellidos:'',saldo:''}
        });//Nueva para la siguiente inserción.
    }
}
export default InsertarForm;