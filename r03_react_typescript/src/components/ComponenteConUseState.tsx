import React, { FC, Fragment } from 'react';

export const ComponenteConUseState:FC<{}> = () => {
    return <Fragment>
        <form>
            Nueva: <input type="text"/>
            <button>Insertar</button>
        </form>
        <table>
            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </Fragment>
}