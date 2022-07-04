import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { contains } from "jquery";
import ReactDOM from 'react-dom';
import "../components/Add.js";
import Add from "../components/Add.js";
import { Navigate } from 'react-router-dom';
const Table = () =>
{
  const [isAuth ,setIsAuth]=useState(true);
   if(!isAuth)
   {
    return<Navigate to={"/Add"}/>
   }


  return(
    <div className="container" style={{marginTop:"100px"}}>
     
      <button type="button" class="btn btn-success"style={{marginLeft:"1300px"}} onClick={()=>setIsAuth
                 (false)}>Add</button>
              
     
     <table className="table table-bordered"style={{width:"1000px",marginLeft:"400px"}}>
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Student Name</th>
          <th scope="col">Class</th>
          <th scope="col">Result</th>
          <th scope="col">Score</th>
          <th scope="col">Grade</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>


        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Robert Fox</td>
          <td>8th</td>
          <td style={{color:"green"}}><b>Passed</b></td>
          <td>78/100</td>
          <td>Excellent</td>
         <td> <button type="button" class="btn btn-success">Edit</button></td>
         <td> <button type="button" class="btn btn-danger">Delete</button></td>
          
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Ralph Edwards</td>
          <td>7th</td>
          <td style={{color:"red"}}><b>Failed</b></td>
          <td>20/100</td>
          <td>poor</td>
          <td><button type="button" class="btn btn-success">Edit</button></td>
          <td> <button type="button" class="btn btn-danger">Delete</button></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Esther Howard</td>
          <td>9th</td>
          <td style={{color:"green"}}><b>Passed</b></td>
          <td>60/100</td>
          <td>Avarage</td>
          <td><button type="button" class="btn btn-success">Edit</button></td>  
          <td> <button type="button" class="btn btn-danger">Delete</button></td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Eleanor Pena</td>
          <td>8th</td>
          <td style={{color:"green"}}><b>Passed</b></td>
          <td>60/100</td>
          <td>Avarage</td>
          <td><button type="button" class="btn btn-success">Edit</button></td>  
          <td> <button type="button" class="btn btn-danger">Delete</button></td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Arlene McCoy</td>
          <td>7th</td>
          <td style={{color:"green"}}><b>Passed</b></td>
          <td>85/100</td>
          <td>Excellent</td>
          <td><button type="button" class="btn btn-success">Edit</button></td>  
          <td> <button type="button" class="btn btn-danger">Delete</button></td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Marvin McKinney</td>
          <td>9th</td>
          <td style={{color:"red"}}><b>Failed</b></td>
          <td>25/100</td>
          <td>poor</td>
          <td><button type="button" class="btn btn-success">Edit</button></td>  
          <td> <button type="button" class="btn btn-danger">Delete</button></td>
        </tr>

        <tr>
          <th scope="row">7</th>
          <td>Wade Warren</td>
          <td>7th</td>
          <td style={{color:"green"}}><b>Passed</b></td>
          <td>90/100</td>
          <td>Excellent</td>
          <td><button type="button" class="btn btn-success">Edit</button></td>  
          <td> <button type="button" class="btn btn-danger">Delete</button></td>
          <td>
            
        
           </td>
        </tr>
      </tbody>
     </table>
      
    </div>

  );
}
export default Table;