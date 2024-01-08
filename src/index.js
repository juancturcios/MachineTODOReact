import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
        <App />,
        
        document.getElementById('root')
    )
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
// function App(props)
// {
//     return (<h1>
//         ¡{props.saludo}, {props.nombre}!
//     </h1>
//     );
// }

// function withHOC(WrappedComponent){
//     return function ComponenteDeVerdad(props){
//         return (
//             <React.Fragment>
//                 <WrappedComponent {...props}/>
//                 <p>Estamos acompñando al wrapped Component</p>
//             </React.Fragment>
//         )
//     }
// }
// function withSaludo(WrappedComponent){
//     return function WrappedComponentWithSaludo(saludo){
//         return function ComponenteDeVerdad(props){
//             return (
//                 <React.Fragment>
//                     <WrappedComponent {...props} saludo={saludo}/>
//                     <p>Estamos acompñando al wrapped Component</p>
//                 </React.Fragment>
//             )
//         }
//     }
//  }

// const AppWithSaludo= withSaludo(App)("Hola")

// ReactDOM.render(
//     <AppWithSaludo nombre="Juan"/>,
//     //<App saludo="Buenas" nombre="Juan"/>,
//     document.getElementById('root')
// )
