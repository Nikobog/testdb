/* function getCounter() {
    let counter = 0;
    return function() {
        return counter++;
    }
}
let count = getCounter();
let nik = getCounter();
console.log(count());  // 0
console.log(count());  // 1
console.log(count());  // 2
console.log(nik());
console.log(nik());
console.log(nik());

// 22222
const nik = {
    value: 6,
    left: {
        value: 10,
        left: {
            value: 1,
        },
        right: {
            value: 2,
        }
    },
    right: {
        value: 5,
        left: {
            value: 3,
        },
        right: {
            value: 4,
        }
    }
}
function sumTree(tree) {
    let count = tree.value;
    if(tree.left){
        count += sumTree(tree.left)
    }
    if (tree.right) {
        count += sumTree(tree.right)
    }
    return count;
}
console.log(sumTree(nik))*/
// 3333333333333333
function someFun() {
    console.log(arguments);
}
Function.prototype.delay = function (delay) {
    return (...args) => {
        setTimeout(() => {
            this(...args);
        }, delay);
    }
}
const someFnWithDelay = someFun.delay(2000);
someFnWithDelay(0,1,2,3,4)