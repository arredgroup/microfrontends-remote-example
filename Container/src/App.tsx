import React from 'react';
import './App.scss';
import {PrincipalTable} from "./components/Remotes";

function App() {
  return (
    <div className="App">
        <h1>Contenedor Principal</h1>
        <React.Suspense fallback='...'>
            <PrincipalTable />
        </React.Suspense>
    </div>
  );
}

export default App;
