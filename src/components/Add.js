import './Add.css';

function Add() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         
         <div>
           <h1>Add Student</h1>
           <div>
             <input type="text" placeholder="student name" className="name"/>
           </div>

           <div className="second-input"> 
             <input type="name" placeholder="class" className="name"/>
           </div>

           <div className="second-input">
             <input type="name" placeholder="score" className="name"/>
           </div>
           <div>
            Result <br/>

            --
           </div>
           <div>
            Score <br/>

            --
           </div>
          <div className="lg-button">
          <button className='btn aa'>confirm</button>
          <br></br>
          <br>
          </br>
          <button className='btn bb'>cancel</button>
          </div>
           
           
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default Add;