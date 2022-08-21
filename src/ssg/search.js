const list = {
    "data": [
        {"name": "John", "email": "john2@mail.com", "rating": 20, "disabled": false},
        {"name": "John", "email": "john1@mail.com", "rating": 14, "disabled": false},
        {"name": "Jane", "email": "jane@mail.com", "rating": 25, "disabled": true},
    ],
    "condition": {
        "exclude": [{"disabled": true}],
        "sort_by": ['rating']
    }
}
const lList = {
    "data": [
        {"user": "mike2@mail.com", "rating": 20, "disabled": false},
        {"user": "greg@mail.com", "rating": 14, "disabled": false},
        {"user": "john@mail.com", "rating": 25, "disabled": true},
    ]}
const conList = {}
const lListRes = {"result": [
        {"user": "greg@mail.com", "rating": 14, "disabled": false},
        {"user": "john@mail.com", "rating": 25, "disabled": true}
    ]}
let search = document.getElementById('calculator')

