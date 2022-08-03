import React, {useState} from 'react'
import testDB from '../../server/db.json'
const [db] = Object.values(testDB);


const Page = () => {
    const [pageId, setPageId] = useState(0)

    function pageItem(db, pageId, onPage){
        const itemsIdOnPage = pageId*onPage
        const test = db.map(item => (item.id <= (itemsIdOnPage + onPage)) && (item.id > itemsIdOnPage) && (
            <div className="col">
                <div>{item.id}</div>
                <div>{item.amount}</div>
                <div>{item.birz}</div>
                <div>{item.hash}</div>
                <div>{item.time_trans}</div>
            </div>
        ))
        return test
    }

    return(
        <div className="container">
            {pageItem(db, 0, 18)}
        </div>
    )
}
export default Page;
