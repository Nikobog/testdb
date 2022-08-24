let res = []
let max = 10000
const randomPoint = {"x": rand(), "y": rand(), "z": rand()}
const startPoint = {"x": 0, "y": 0, "z": 0} // начинаем с начала координат
function rand(){ return Math.floor(Math.random() * max)}

console.log('Задача №3')
console.log('Входящие параметры: ',randomPoint, 'максимальная позиция по осям : ', max)
function searchPoint(point, start ) {
    let step = 0
    class Point {
        constructor(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        }

        distance(p1, p2) {
            let dist = Math.sqrt(((p2.x - p1.x) ** 2) + ((p2.y - p1.y) ** 2) + ((p2.z - p1.z) ** 2))
            if(dist != 0){
                step++
                let item = {"x": p2.x, "y": p2.y, "z": p2.z}
                res.push({"item": item,"distance": dist})
                if(p1.x > p2.x) {
                    p2.x = (p2.x != 0) ? (p2.x + Math.round(max/(2**step))) : max/2
                } else if(p1.x < p2.x){
                    p2.x = (p2.x != 0) ? (p2.x - Math.ceil(max/(2**step))) : max/2
                } else {p2.x = p2.x}

                if(p1.y > p2.y) {
                    p2.y = (p2.y != 0) ? (p2.y + Math.round(max/(2**step))) : max/2
                } else if(p1.y < p2.y){
                    p2.y = (p2.y != 0) ? (p2.y - Math.ceil(max/(2**step))) : max/2
                } else {p2.y = p2.y}

                if(p1.z > p2.z) {
                    p2.z = (p2.z != 0) ? (p2.z + Math.round(max/(2**step))) : max/2
                } else if(p1.z < p2.z){
                    p2.z = (p2.z != 0) ? (p2.z - Math.ceil(max/(2**step))) : max/2
                } else {p2.z = p2.z}
                let newPoint = new Point().distance(p1, p2)
            } else {
                let item = {"x": p2.x, "y": p2.y, "z": p2.z}
                res.push({"item": item,"distance": dist})
            }

            return dist
        }
    }
    new Point().distance(point, start).toFixed(2)
    return {"result": {
        "random_point": point,
        "search_points": res,
        "calls": res.length
    }}
}


// console.log('Выходные данные: ', searchPoint({"x": 0, "y": 0, "z": 10}, {"x": 0, "y": 0, "z": 0}) )
console.log('Выходные данные: ', searchPoint( randomPoint, startPoint ) )
console.log('-=-=-=-=-=-=-=-=-')

