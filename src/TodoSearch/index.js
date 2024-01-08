import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue, loading}){

    return(
      <input placeholder="Cortar Ceboolla" className="TodoSearch" disabled={loading}
      value={searchValue}
      onChange={
        (event) =>{
            setSearchValue(event.target.value);
        }
      }
      
      />
    );
  }

  export {TodoSearch};


//   import React from "react";
// import './TodoSearch.css';

// function TodoSearch({
//     searchValue,
//     setSearchValue
// }){

    
//     return(
//       <input placeholder="Cortar Ceboolla" className="TodoSearch"
//       value={searchValue}
//       onChange={
//         (event) =>{
//             setSearchValue(event.target.value);
//         }
//       }
      
//       />
//     );
//   }

//   export {TodoSearch};