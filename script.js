let buttons = document.querySelectorAll("button");
let outputScreen = document.querySelector(".outputScreen");
let equal = document.querySelector(".equal");
let question;

buttons.forEach( (e) => {
    e.addEventListener('click', displayOnScreen )
    
    function displayOnScreen(e){
        outputScreen.textContent += e.target.textContent
    }
    
})

equal.addEventListener( 'click', () => {
    question = outputScreen.textContent;
    let numbers = '0123456789'
    for (let i=0; i<question.length; i++){
        
        if(numbers.includes(question[i]))
        {

        }
    }
})