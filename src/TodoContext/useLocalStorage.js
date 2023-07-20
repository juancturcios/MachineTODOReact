import React from 'react';

function useLocalStorage(itemName, initialValue){ //Los coustome hooks se les pone use al inicio
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  

    React.useEffect(() =>{
      setTimeout(()=>{
        try{
          const localStorageItem=localStorage.getItem(itemName);
        console.log(localStorageItem);
          let parsedItem;
      
          if(!localStorageItem)
        {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem=initialValue;
        }else{
          parsedItem=JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
    
        setLoading(false);
         } catch(error){
          setLoading(false);
          setError(true);
         }
      },2000);
    },[]);
    
  
    const saveItem =(newItem)=>{
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return {item, saveItem, loading, error}//El retorno es lo que siempre tiene que tener un coustome hook, se retornan lo que se utilizara desde donde se llama la función
  }

  export {useLocalStorage}