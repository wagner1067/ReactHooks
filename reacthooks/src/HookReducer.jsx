import { useReducer } from "react";
import './App.css'

function reducer(state, action) {
    switch (action.type) {
        case "Click":
            return {count: state.count + 1, text: !state.text}
    }
}

function App(){
    
    const [state,  dispatch] = useReducer(reducer, {
        count: 0,
        text: true,
    })
    
    /*const [count, setCount] = useState(0)
    const [text, setText] = useState(true) */

    function Counter() {

        dispatch({type:'Click'})

        /*setCount((count)=> count+1)
        if (count%2 != 0){
            setText(true)
        } else {
            setText(false)
        }*/
    }

    return (
        <>
        <h1>Contador... </h1>
        <div className="card">
            <button onClick={Counter}>
                A contagem é {state.count}
            </button>
            <p>
                {state.text == true && (
                    <p> Olá </p>
                )}
            </p>
        </div>
        </>
    )
}

export default App