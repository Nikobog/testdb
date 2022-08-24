const searchOption = {
    "data":    [{"name": "John", "email": "john2@mail.com"},
                {"name": "John", "email": "john1@mail.com"},
                {"name": "Jane", "email": "jane@mail.com"}],
    "condition": {
        "include": [{"name": "John"}],
        "sort_by": ["email"]
    }
}
const searchOptionRes = {
    "result": [ {"name": "John", "email": "john1@mail.com"},
                {"name": "John", "email": "john2@mail.com"}]}

const searchOptions = {
    "data": [{"user": "mike@mail.com", "rating": 20, "disabled": false},
        {"user": "greg@mail.com", "rating": 14, "disabled": false},
        {"user": "john@mail.com", "rating": 25, "disabled": true}],
    "condition": {"exclude": [{"disabled": true}], "sort_by": ["rating"]}}

const searchOptionsRes = {"result": [{"user": "greg@mail.com", "rating": 14, "disabled": false},
        {"user": "mike@mail.com", "rating": 20, "disabled": false}]}
///////////////////////////////////

let search = document.getElementById('search')
let enterData = document.createElement('div')
let resultData = document.createElement('div')
resultData.className = 'result_data'
enterData.className = 'enter_data'
function viewItems( items, title ) {
    let html = `<div class="title">${title}</div>`
    items.map((item, i) => {
        let itemHtml = ''
        Object.keys(item).map((k) => {itemHtml += `<div key="${k}">${k}: ${item[k]}</div>`})
        html += `<div index="${i}">${itemHtml}</div>`
    })
    return html
}

function Sorting( list, key) {
    switch (typeof list[0][key]){
        default:
        case "string":
            list = list.sort(function(a, b){
                let keyA = a[key].toLowerCase()
                let keyB = b[key].toLowerCase()
                if (keyA < keyB)
                    return -1
                if (keyA > keyB)
                    return 1
                return 0
            })
            break;
        case "number":
        case "boolean":
            list = list.sort(function (a,b) {return a[key] - b[key]})
            break;
    }
    return list
}

function searchItem(options){
    let condKey = ''
    let condVal = ''
    let res = []
    let list = options.data
    let condType = Object.keys(options.condition)[0]
    let sort = options.condition.sort_by[0]

    Object.values(options.condition)[0].forEach((i)=> {
        condKey = Object.keys(i)[0]
        condVal = i[condKey]
    })

    enterData.innerHTML = viewItems( options.data, 'Входящие параметры: ' )
    search.append(enterData)
    let sortBy = document.createElement('div')
    sortBy.innerHTML =`<div class="title">Сортировка:</div><div>метод - ${condType}</div><div>параметры - ${condKey}:${condVal}</div><div>сортировка по - ${sort}</div>`
    search.append(sortBy)
    console.log('Задача №2')
    console.log('Входящие параметры: ',options)


    switch (condType) {
        default:
        case 'include':
            list.map((item) => {
                Object.keys(item).map( (k) => ( k == condKey && item[k] === condVal) ? res.push(item) : '' )
            })
            break;

        case 'exclude':
            list.map((item) => {
                Object.keys(item).map( (k) => ( k == condKey && item[k] !== condVal) ? res.push(item) : '' )
            })
            break;
    }

    res = Sorting(res, sort)
    resultData.innerHTML = viewItems( res, 'Выходные данные: ' )
    console.log('Выходные данные: ', {"result": res})
    console.log('-=-=-=-=-=-=-=-=-')
    return {"result": res}
}
searchItem(searchOption)

search.append(resultData)