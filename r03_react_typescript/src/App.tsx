import React, { FC } from 'react';
import './App.css';

export type AppProps ={
  titulo:string;
}

const App:FC<AppProps> = (props:AppProps) => {
  const {titulo} = props;
  return (
    <div className="App">
      <header className="App-header">
        <p>{titulo}</p>
      </header>
    </div>
  );
}

export default App;
