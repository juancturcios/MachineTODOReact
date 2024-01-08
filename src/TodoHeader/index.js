import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';

function TodoHeader({children, loading}){
    return(
        <header>
          {React.Children.toArray(children).map(child =>React.cloneElement(child, {loading}))}
        </header>
    );
}

export {TodoHeader};