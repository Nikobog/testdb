
import './App.css';
import { http } from "../../services/httpApi";
import {useState, useEffect} from "react";
import { Fruits } from './Fruits'

function App() {
    const [count1, setCount1] = useState(0)
    const [count, setCount] = useState(0)
    //
    // useEffect(() => {
    //     console.log(1111111, 'did render', count)
    //
    //     return () => {
    //         console.log(22222, 'cleanup', count)
    //     }
    // }, [count])

    return (
        <div className="App">
            <button onClick={() => setCount1(count1+1)}>Rerender</button>
            <button onClick={() => setCount(count+1)}>{String(count)}</button>
            <Fruits />
        </div>
    );
}

export default App;
