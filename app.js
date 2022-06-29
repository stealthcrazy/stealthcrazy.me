const userInput = document.getElementById('input-range');
const userAnswer = document.getElementById('input-answer');
const buttonEnter = document.getElementById('btn-enter');
const btnSubmit = document.getElementById('btn-submit');
const answerQuadratic = document.getElementById('answer-quadratic');
const currentQuadraticOutput = document.getElementById('current-quadratic');
const currentDisplayOutput = document.getElementById('display-result');
let quaraticTerms = []
function outputAnswer(quadratic){
    currentDisplayOutput.textContent = quadratic;
}
function getUserInput(){
    let Input = parseInt(userInput.value);
    return Input;
}
function getUserAnswer(){
    let Answer = parseInt(userAnswer.value);
    return Answer;
}
function randomInteger(max) {
    return Math.floor(Math.random() * (max - 1));
  }
function quadraticGenerator(){
    const usrInp =  getUserInput();
    let a = Math.random() * usrInp;
    console.log(a)
    a = Math.floor(a);
    let b = Math.random() * usrInp;
    console.log(b)
    b = Math.floor(b);
    let c = Math.random() * usrInp;
    console.log(c)
    c = Math.floor(c);
    let d = Math.random() * usrInp;
    console.log(d)
    d = Math.floor(d);
    let A = a*b;
    let B = (a*d)+(b*c);
    let C = c*d
    let quadratic = `The quadratic is ${A}x^2+${B}x+${C}`;
    outputAnswer(quadratic);
    quaraticTerms = []
    quaraticTerms.push(a);
    quaraticTerms.push(b);
    quaraticTerms.push(c);
    quaraticTerms.push(d);


}
function revealAnswer(){
    answerQuadratic.textContent = `Answer = (${quaraticTerms[0]}x+${quaraticTerms[2]})(${quaraticTerms[1]}x+${quaraticTerms[3]})`;


}

buttonEnter.addEventListener('click',quadraticGenerator);

btnSubmit.addEventListener('click',revealAnswer);

