const exchange = [
    {"unit":"m","value":1},
    {"unit":"sm","value":100},
    {"unit":"ft","value":3.2808},
    {"unit":"mm","value":1000},
    {"unit":"km","value":0.001},
    {"unit":"in","value":39.37},
    {"unit":"yd","value":1.0936}
]
let calculator = document.getElementById('calculator')

function createSteps(stepName, anotherStepName) {
    function crElem(e, className) {
        let el = document.createElement(e)
        el.className += className
        return el
    }
    let step = crElem('div', stepName)
    let btns = crElem('div', `${stepName}-btns btns`)
    let res  = crElem('div', `${stepName}-res`)
    let un   = crElem('span', `${stepName}-un`)
    let inp  = crElem('input', `${stepName}-inp`)
    inp.addEventListener('change', function (){
        let inpVal = testVal(this.value)
        if(!inpVal){
            for(let i=1; i<this.value.length; i++){
                if(testVal(this.value.substr(0,  i))){
                    inpVal = this.value.substr(0,  i)
                }
            }
        }
        this.value = inpVal

        function testVal(val) {
            return (/^\d+\.\d+$/.test(val) || /^\d+$/.test(val)) ? val : false
        }
        calcCheckInput( inpVal )
    })
    inp.value = 1
    if(stepName != 'from'){inp.setAttribute('disabled', true)}

    res.append( inp, un )

    exchange.forEach((e, i) => {
        let btn = document.createElement('button')
        if(i==0){
            btn.setAttribute('class', 'btn-act')
            btn.setAttribute("disabled", true)
        }
        btn.setAttribute('key', i)
        btn.setAttribute('unit', e.unit)
        btn.setAttribute('ex', e.value)
        btn.addEventListener('click', function () {
            changeButton(this.parentElement, this.getAttribute('unit'))
            let inpVal = this.parentElement.parentElement.querySelector('input').value
            calcCheckBtn(this.getAttribute('unit'), inpVal, anotherStepName)
        })
        btn.append(e.unit)
        btns.append( btn )
    })

    step.append( btns, res )
    calculator.append( step )
}
createSteps('from', 'to')
createSteps('to', 'from')

function changeButton ( list, unit ) {
    list.querySelector('.btn-act').removeAttribute('disabled')
    list.querySelector('.btn-act').removeAttribute('class')
    list.querySelector('button[unit="' + unit + '"]').setAttribute('class', 'btn-act')
    list.querySelector('.btn-act').setAttribute("disabled", true)
}

function checkButton ( list, unit ) {
    let btnAct = list.querySelector(' button[unit="' + unit + '"]').getAttribute('class')
    if( ! btnAct) { changeButton(list, unit) }
}

function calcCheckBtn( unit, value, convert){
    let convert_to = calculator.querySelector('.' + convert + ' .btn-act').getAttribute('unit')
    let res = {"distance": {"unit": unit, "value": value}, "convert_to": convert_to}
    calcCheck(res, convert)
}

function changeInput ( input, val ) {
    input.value = val
}

function checkInput ( input, val ) {
    if(input.value != val){changeInput(input, val)}
}

function calcCheckInput( value ) {
    let unit = calculator.querySelector('.from .btn-act').getAttribute('unit')
    let convTo = calculator.querySelector('.to .btn-act').getAttribute('unit')
    calcCheck({
        "distance": {
            "unit": unit,
            "value": value
        },
        "convert_to": convTo
    })
}

function calcCheck( req, another ) {
    console.log('Задача №1')
    console.log('Входящие параметры: ',req)
    let distVal = '';
    let convertTo = '';
    let distUnit ='';
    if(req) {
        distUnit  = ( req.distance.unit ) ? req.distance.unit : 'm'
        convertTo = ( req.convert_to ) ? req.convert_to : 'ft'
        distVal   = ( req.distance.value ) ? req.distance.value : 1
    } else {
        distUnit  = 'm'
        convertTo = 'ft'
        distVal   = 1
    }
    let convert = (!another) ? false : another
    let res = ''
    switch(convert){
        case false:
        case 'to':
            checkButton(calculator.querySelector('.from-btns'), distUnit)
            checkInput(calculator.querySelector('.from-inp'), distVal)
            checkButton(calculator.querySelector('.to-btns'), convertTo)
            res = calc()
            break;
        case 'from':
            checkButton(calculator.querySelector('.to-btns'), distUnit)
            checkInput(calculator.querySelector('.to-inp'), distVal)
            checkButton(calculator.querySelector('.from-btns'), convertTo)
            res = calc()
            break;
    }
    console.log('Выходные данные: ',res)
    console.log('-=-=-=-=-=-=-=-=-')
    return res
}

function calc( ){
    let fromEx = calculator.querySelector('.from .btn-act')
    let toEx   = calculator.querySelector('.to .btn-act')
    let val    = calculator.querySelector('.from-inp').value
    let input  = calculator.querySelector('.to-inp')
    let res = 1
    res = ( Number(fromEx) != 1 ) ? ( res / Number(fromEx.getAttribute('ex')) ) : 1
    res = ( Number(toEx) != 1 ) ? ( res * Number(toEx.getAttribute('ex')) ) : res
    res = (res * Number(val)).toFixed(2)
    input.value = res
    calculator.querySelector('.to-un').innerHTML = toEx.getAttribute('unit')
    return {"unit": toEx.getAttribute('unit'), "value": res}
}

let enterJSON = { "distance": {"unit": "m", "value": 0.5}, "convert_to": "ft"}

calcCheck(enterJSON)
