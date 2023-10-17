import React from 'react'

class ExampleClass extends React.Component {

    constructor(){
        super()
        this.state = {
            name: 'Luis',
            nombres: ["Hugo", "Paco", "Luis"]
        }
    }


    componentDidMount(){
        console.log("Renderizando mi Componente");
    }

    componentDidUpdate(){
        console.log("Componente Actualizado");
    }

    componentWillUnmount(){
        console.log("Componente Eliminado")
    }



    render(){
        return (
            <>
            <h1>Mi nombre es: {this.state.name}</h1>
            <ul>
                {
                    this.state.nombres.map((name, index) => {
                        return <li key={index}>{name}</li>
                    })
                }
            </ul>
            <button onClick={() => {
                this.setState({
                    name: 'John Doe'
                })
            }}>
                cambiar nombre
            </button>
            </>
        )
    }
}

export default ExampleClass