import React from 'react';
import PrincipalTable from "./components/PrincipalTable/PrincipalTable";

function App() {
  return (
    <PrincipalTable title={"DEMO"} elements={[{id:"1",name:"ka"}]} />
  );
}

export default App;
