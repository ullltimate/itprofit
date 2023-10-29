import { createWarning, removeWarning } from "../healper/healper";

export function validation(arrayInputs){

    arrayInputs.forEach(e => checkInput(e));

    function checkInput(input){
        if(input.value.trim() === ''){
            createWarning(input, 'Please fill this field!');
        } else {
            removeWarning(input);
            if (input.id === 'email'){
                let reg = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
                let valid = reg.test(input.value);
                if(!valid) {
                    createWarning(input, 'Email should be like this example@example.com');
                } else {
                    removeWarning(input);
                }
            }
            if(input.id === 'phone'){
                input.value.length < 17 ? createWarning(input, 'The number must consist of 12 digits') : removeWarning(input)
            }
        }
    }
}