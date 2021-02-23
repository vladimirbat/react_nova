import matriz_personas from "./js/matriz_personas";
import {createStore} from 'redux';
// ---------- INICO DE REDUX (Toda la lógica de negocio)---------------
let estadoInicial ={
    personasMostradas:matriz_personas
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
    } else {
        return Object.assign({},estado);
    }
}


export const store = createStore(reductorPrincipal);
export default reductorPrincipal;
