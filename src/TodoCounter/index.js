import './TodoCounter.css';
import React from 'react';

function TodoCounter({completedTodos, totalTodos, completedAll, loading}){
    return(
        <React.Fragment>
            {
            completedAll===true ?
                <h1 className="TodoCounter"><span>FELICIDADES HAS COMPLETADO TODAS LAS TAREAS</span></h1>
             : <h1 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs</h1>
            }
      
      </React.Fragment>
    );
  }
  
  export {TodoCounter};


//   import './TodoCounter.css';
// import React from 'react';

// function TodoCounter({total, completed, completedAll}){
//     return(
//         <React.Fragment>
//             {
//             completedAll===true ?
//                 <h1 className="TodoCounter"><span>FELICIDADES HAS COMPLETADO TODAS LAS TAREAS</span></h1>
//              : <h1 className="TodoCounter">Has completado <span>{completed}</span> de <span>{total}</span> TODOs</h1>
//             }
      
//       </React.Fragment>
//     );
//   }
  
//   export {TodoCounter};