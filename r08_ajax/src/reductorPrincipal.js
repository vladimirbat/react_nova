
import {createStore} from 'redux';
// ---------- INICO DE REDUX (Toda la lógica de negocio)---------------
let estadoInicial ={
    personasMostradas:[]
};
function reductorPrincipal(estado=estadoInicial,accion){
    console.log("reducer","estado",estado,"accion",accion);
    if(accion.type==="INSERTAR"){
        let estadoSiguiente = {
            personasMostradas: 
                Object.assign([],estado.personasMostradas)
        };
        estadoSiguiente.personasMostradas.push(accion.nuevo);
        return estadoSiguiente;
    } else if(accion.type==="BORRAR"){
        let estadoSiguiente = {};
        estadoSiguiente.personasMostradas = 
            estado.personasMostradas.filter(
                p => p.dni!==accion.dni
            );
        return estadoSiguiente;
    } else if(accion.type==="RECIBIDO"){
        let estadoSiguiente = Object.assign({},estado);
        estadoSiguiente.personasMostradas=accion.datos;
        return estadoSiguiente;
    } else {
        return Object.assign({},estado);
    }
}


export const store = createStore(reductorPrincipal);
export default reductorPrincipal;
