let question = '98+4-2';
let numbers = '0123456789';
let firstOperand = 0;
let operand = '';
let answer = 0;
let operator = 1;
let count = 0;
for (let i=0; i<question.length; i++){
    
    if(numbers.includes(question[i]))
    {
        operand +=  (question[i])
    }
    else{
       
            if(operator == 1){
                answer += Number(operand)
            }
            else if(operator == 2){
                answer -= Number(operand)
            }
            
        
            if(question[i]=='+')
            {
                operator = 1;
            }
            else if(question[i]=='-')
            {
                operator = 2;
            }

            operand = '';
            // if(question[i]=='*')
            // {
            //     operator = 3;
            //     count++;
            // }
            // if(question[i]=='/')
            // {
            //     operator = 4;
            //     count++;
            // }

            
        }
    
    }
console.log(answer)
