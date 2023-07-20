import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
import React from 'react';
//import { useLocalStorage } from '../TodoContext/useLocalStorage';

// const defaultTodos=[
//   { text: 'Cortar Cebolla', completed:true},
//   { text: 'Tomar el Curso de Introducción a React.js', completed:false},
//   { text: 'Llorar con la Llorona', completed:false},
//   { text: 'Otra cosa', completed:false},
//   { text: 'Usar estados derivados', completed:true},
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
//localStorage.removeItem('TODOS_V1');



function App() {

  // //const [todos, setTodos]= React.useState(parsedTodos); //Asignar un estado por defecto de un arreglo
  // const {item: todos, saveItem: saveTodos, loading, error}= useLocalStorage('TODOS_V1', []); //Asignar un estado por defecto de un arreglo

  // const [searchValue, setSearchValue] = React.useState('');

  // const completedTodos = todos.filter(todo => !!todo.completed).length; //Retornar un booleano
  // const totalTodos = todos.length;
  // const [completedAll, setCompletedAll]= React.useState(false);

  // //console.log('Log 1');

  // // React.useEffect(()=> { //El useEffect se utiliza para cargar partes pesadas del codigo y se cargan después
  // //   console.log('Loooooog 2');
  // // });

  //   //   React.useEffect(()=> {
  //   //    console.log('Loooooog 2');
  //   //  }, []);

  // //    React.useEffect(()=> {
  // //     console.log('Loooooog 2');
  // //   }, [totalTodos]);//Se ejecuta este efecto cada vez que cambie el estado de esta variable totalTodos

  // // console.log('Log 3');


  // const searchedTodos= todos.filter((todo) => {
  //   const todoText= todo.text.toLowerCase();
  //   const searchText= searchValue.toLowerCase();
  //   return todoText.includes(searchText);
  // });



  // const completeTodo=(text) => {
  //   const newTodos=[...todos];
  //   const todoIndex=newTodos.findIndex( //Encontrar un indice de un arreglo
  //     (todo) => todo.text === text
  //   );
  //   newTodos[todoIndex].completed=true;
  //   saveTodos(newTodos);

  //   if((completedTodos+1)===totalTodos)
  //   {
  //     setCompletedAll(true);
  //   }
  // }

  // const deleteTodo=(text) => {
  //   const newTodos=[...todos]; //Crear una copia de un arreglo
  //   const todoIndex=newTodos.findIndex(
  //     (todo) => todo.text === text
  //   );
  //   newTodos.splice(todoIndex,1); //Esto sirve para cortar un arreglo de una posicion a la cantidad de elementos
  //   saveTodos(newTodos);
  // }

 return (
  <TodoProvider>
    <AppUI/>
  </TodoProvider>
 );

//  return (
//   <AppUI
//   loading={loading}
//   error={error}
//   completedTodos={completedTodos}
//     totalTodos={totalTodos}
//     completedAll={completedAll}
//     searchValue={searchValue}
//     setSearchValue={setSearchValue}
//     searchedTodos={searchedTodos}
//     completeTodo={completeTodo}
//     deleteTodo={deleteTodo}/>
//  );
}




export default App;
