import React from 'react';
import "./App.css";
import Table from "./components/Table";
// import { Link } from 'react-router-dom';
import Tabs from 'rc-tabs';



function App() {
  return (
    <div>
      <div className="col-sm-12 sc" style={{height:"900px",width:"300px",backgroundcolor:"yellow"}}>
        
     <Tabs>
        <div label ="Student" style={{cursor:"pointer",backgroundcolor:"skyblue"}} >
          <Table></Table>
        </div >
      </Tabs>
    </div>
    </div>
  );
}

export default App;