import React, { useEffect, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';


const ChooseColor = ({ color, setColor }) => {

    // se ejecuta al cargar mi componente
    useEffect(() => {
        // componentDidMount
        console.log("Renderizando mi Componente ChooseColor");

        
        // se ejecuta antes de eliminar el componente
        return () => {
            // componentWillUnmount
            console.log("Componente ChooseColor Eliminado")
        }
    }, [])

    useEffect(() => {
        // componentDidUpdate
        console.log("Componente Actualizado");
    }, [color])


    return (
        <input type="color" value={color} onChange={(e) => {
            setColor(e.target.value)
        }} />
    )
}

const VolumeRange = ({ range, onChange }) => {
    return <input type="range" min={0} max={100} step={1} value={range} onChange={onChange}/>
}


function ExampleFuntion() {

    const [counter, setCounter] = useState(0)

    const [range, setRange] = useState(50)

    const [nombre, setNombre] = useState("")

    const [color, setColor] = useState("#000000")

    const [name, setName] = useState("Luis") // [value, function]
    const [nombres, setNombres] = useState(["Hugo", "Paco", "Luis"])

    const [state, setState] = useState({
        name: 'Luis',
        nombres: ["Hugo", "Paco", "Luis"]
    })

    const [show, setShow] = useState(false)

    const [edad, setEdad] = useState(29)

    const capturarNombre = (e) => setNombre(e.target.value)

    return (
        <>
            <h1>Mi nombre es: {name}</h1>
            <h4>Nombre: {nombre}</h4>
            <input type="text" onChange={capturarNombre} value={nombre} />
            <ul>
                {
                    state.nombres.map((name, index) => {
                        return <li key={index}>{name}</li>
                    })
                }
            </ul>
            <button onClick={() => {
                setName('John Doe')
            }}>
                cambiar nombre
            </button> <br />
            <h5>Range: <input type="number" min={0} max={100} step={1} value={range} onChange={(e) => setRange(e.target.value)}  /></h5>
            <VolumeRange range={range} onChange={(e) => setRange(e.target.value)} />
            <br />

            <h3>Change Color: <input type="checkbox" value={show} checked={show} onChange={(e) => setShow(!show)} /></h3>

            {
                // renderizado condicionado usando el operador && (and)
                show &&  
                (
                    <ChooseColor color={color} setColor={setColor} />
                ) 
            }
            <div style={{ backgroundColor: color, width: '100px', height: '100px' }}></div><br />

            <h4>Counter: {counter}</h4>
            <div className="input-group">
                {/* renderizado condicionado usando el operador ternario (?) */}
                <button className="btn btn-primary" onClick={() => counter < 20 ? setCounter(counter + 1) : setCounter(20)}>
                    <FaPlus />
                </button>
                {/* renderizado condicionado usando el operador ternario (?) */}
                <button className="btn btn-warning" onClick={() => counter > 0 ? setCounter(counter - 1) : setCounter(0)}>
                    <FaMinus />
                </button>
            </div>
        </>
    )
}

export default ExampleFuntion