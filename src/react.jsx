import React from 'react'
import './index.css';
 function Content(){
     return (
         <div className='content'>
             <h1>
                 Salom {props.ism}
             </h1>
             <h1>
                 yoshi {props.age}
             </h1>

         </div>
     );
 }
 export default Content;