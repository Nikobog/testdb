import './babel'
import './styles/styles.css'
import './styles/less.less'

import React, {useState} from 'react'
import {createRoot} from 'react-dom/client'
import testDB from './server/db.json'
const [db] = Object.values(testDB);


function pageItem(db, pageId, onPage){
    const itemsIdOnPage = pageId*onPage
        const test = db.map(item => (item.id <= (itemsIdOnPage + onPage)) && (item.id > itemsIdOnPage) && (
            <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.amount}</td>
                    <td>{item.birz}</td>
                    <td>{item.hash}</td>
                    <td>{item.time_trans}</td>
            </tr>
        ))
    return test
}

const root = createRoot(document.getElementById('app'))
const App = () => (
    <div className="container">
        <table className="qe"><tbody>{pageItem(db, 0, 18)}</tbody></table>
    </div>
)

root.render(<App />)