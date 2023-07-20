import React from "react";
import { useLocalStorage } from './useLocalStorage';
const TodoContext= React.createContext();

function TodoProvider({ children }){
     //const [todos, setTodos]= React.useState(parsedTodos); //Asignar un estado por defecto de un arreglo
  const {item: todos, saveItem: saveTodos, loading, error}= useLocalStorage('TODOS_V1', []); //Asignar un estado por defecto de un arreglo

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length; //Retornar un booleano
  const totalTodos = todos.length;
  const [completedAll, setCompletedAll]= React.useState(false);

  //console.log('Log 1');

  // React.useEffect(()=> { //El useEffect se utiliza para cargar partes pesadas del codigo y se cargan después
  //   console.log('Loooooog 2');
  // });

    //   React.useEffect(()=> {
    //    console.log('Loooooog 2');
    //  }, []);

  //    React.useEffect(()=> {
  //     console.log('Loooooog 2');
  //   }, [totalTodos]);//Se ejecuta este efecto cada vez que cambie el estado de esta variable totalTodos

  // console.log('Log 3');


  const searchedTodos= todos.filter((todo) => {
    const todoText= todo.text.toLowerCase();
    const searchText= searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

const addTodo= (text) =>{
  const newTodos=[...todos];
  newTodos.push({text, completed:false});
    saveTodos(newTodos);
}

  const completeTodo=(text) => {
    const newTodos=[...todos];
    const todoIndex=newTodos.findIndex( //Encontrar un indice de un arreglo
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed=true;
    saveTodos(newTodos);

    if((completedTodos+1)===totalTodos)
    {
      setCompletedAll(true);
    }
  }

  const deleteTodo=(text) => {
    const newTodos=[...todos]; //Crear una copia de un arreglo
    const todoIndex=newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1); //Esto sirve para cortar un arreglo de una posicion a la cantidad de elementos
    saveTodos(newTodos);
  }
    return (
        <TodoContext.Provider value={{ loading,
            error,
            completedTodos,
            totalTodos,
            completedAll,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
          }}>{children}</TodoContext.Provider>
    );
}



export {TodoContext, TodoProvider};