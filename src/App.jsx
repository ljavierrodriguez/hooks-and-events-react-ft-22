import React from 'react'
import { FaReact } from 'react-icons/fa'
import { TiCalendarOutline } from 'react-icons/ti'
import ExampleClass from './ExampleClass';
import ExampleFuntion from './ExampleFunction';

function App() {

    const name = "";

    return (
        <>
            <h1>
                Hola desde React con Vite 
                <i className="fa-brands fa-react"></i>
                <FaReact />
                <TiCalendarOutline />
            </h1>
            <ExampleClass />
            <ExampleFuntion />
        </>
    )
}

export default App