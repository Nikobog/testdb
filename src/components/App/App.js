
import './App.css';
import { http } from "../../http/httpApi";
import {useState, useEffect} from "react";


function App() {
    const [count, setCount] = useState(0)

    const [viewTable, setViewTable] = useState(false)
    useEffect(() => {
        if(!viewTable) {http().then(data => (setViewTable(data)))}
    })

    return (
        <div className="App">
            <button onClick={() => setCount(count+1)}>{String(count)}</button>
            {Object.values(viewTable).map((e,i) => (
                <div key={i}><span>{e.genus}</span><span>{e.name}</span></div>
            ))}
        </div>
    );
}

export default App;
