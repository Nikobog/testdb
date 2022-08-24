/* const questionList = {
    "question": "What is your marital status?",
    "answer": [
        {"Single": {"question":"Are you planning on getting married next year?", "answer": ["Yes/No"]}},
        {"Married": {"question":"How long have you been married?", "answer": [
            {"More than a year": {"question":"Have you celebrated your one year anniversary?", "answer": ["Yes/No"]}},
            "Less than a year"
        ]}}
    ]
}
function numerate(step){
    class Step {
        constructor(question, answer) {
            this.question = question;
            this.answer = answer;
        }

        path( step, prev ) {
            let list = []
            let stepQuest = step.question
            let stepAnswer = step.answer
// console.log(prev)
            if(prev)
                list.push(prev)

            stepAnswer.map((answer) => {
                let item = {}
                if(typeof answer != 'string') {
                    item[stepQuest] = Object.keys(answer)[0]
                    let pathStep = item
                    let newStep = new Step().path(Object.values(answer)[0], pathStep)
                    return item
                } else {
                    item[stepQuest] = answer
// console.log(item)
                    list.push(item)
                    return item
                }
            })
 console.log(list)
        }
    }
    new Step().path(step)

}
numerate(questionList)

 */


const question = {
    value: 1,
    question: "What is your marital status?",
    left: {
        answer: "Single",
        value: 2,
        question: "Are you planning on getting married next year?",
        left: {
            answer: "Yes/No"
        }
    },
    right: {
        answer: "Married",
        value: 3,
        question: "How long have you been married?",
        left: {
            answer: "Less than a year"
        },
        right: {
            answer: "More than a year",
            value: 4,
            question: "Have you celebrated your one year anniversary?",
            left: {
                answer: "Yes/No"
            }
        }
    }
}
console.log(viewQuestions(question))

function viewQuestions(tree) {
    let list = []
    let step = function Step(list, item){
        if(item)
            list.push(item)
        return list;
    }

    let stepQuestion = ( tree.question ) ? tree.question : false
    let stepAnswer = ( tree.answer ) ? tree.answer : false

    if(tree.left){
        if(tree.left.question){
            let item = {}
            item[stepQuestion] = tree.left.answer
            console.log(step(list, item))
            viewQuestions(tree.left)
        }
    }

    if(tree.right){
        if(tree.right.question){
            let item = {}
            item[stepQuestion] = tree.right.answer
            console.log(step(list, item))
            viewQuestions(tree.right)
        }
    }



    return step;
}