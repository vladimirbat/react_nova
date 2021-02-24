import React, { ChangeEvent, FC, FormEvent, Fragment, useState } from 'react';

export const ComponenteConUseState:FC<{}> = () => {
    const [lista, setLista] = useState<string[]>([]);
    const [nombrePersona, setNombrePersona] = useState<string>('');

    function guardar(event:FormEvent){
        event.preventDefault();
        // Forzamos a renderizar de nuevo porque es un array nuevo el que guardo. 
        // Si fuera el mismo array (aunque tuviera un elemento más), 
        // este setLista no forzaría un renderizado.
        setLista([...lista, nombrePersona]);
        setNombrePersona('');
    }

    function cambio(event:ChangeEvent<HTMLInputElement>){
        setNombrePersona(event.target.value)
    }

    return <Fragment>
        <form onSubmit={guardar}>
            Nueva: <input type="text" value={nombrePersona} onChange={cambio}/>
            <button>Insertar</button>
        </form>
        <table>
            <thead><tr><th>Nombre Persona</th></tr></thead>
            <tbody>
                {lista.map((elemento, i)=> <tr key={i}><td>{elemento}</td></tr>)}
            </tbody>
        </table>
    </Fragment>
}

