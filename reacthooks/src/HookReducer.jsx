import { useState } from "react";
import './App.css'

function App(){
    const [count, setCount] = useState(0)
    const [text, setText] = useState(true)

    function Counter() {
        setCount((count)=> count+1)
        if (count%2 != 0){
            setText(true)
        } else {
            setText(false)
        }
    }

    return (
        <>
        <h1>Contador... </h1>
        <div className="card">
            <button onClick={Counter}>
                A contagem é {count}
            </button>
            <p>
                {text == true && (
                    <p> Olá </p>
                )}
            </p>
        </div>
        </>
    )
}

export default App