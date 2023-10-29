import IMask from 'imask';
import { validation } from './validation';
import { checkWarning, clearForm, createWarning, removeWarning } from '../healper/healper';
import { sendForm } from './api';

export function form(){
    const inputName = document.getElementById('name');
    const inputEmail = document.getElementById('email');
    const inputPhone = document.getElementById('phone');
    const inputMessage = document.getElementById('message');
    const form = document.querySelector('.contacts-form');
    const btnSubmit = document.querySelector('.contacts-form__content-button');
    const arrayInputs = [inputName, inputEmail, inputPhone, inputMessage];

    IMask(
        inputPhone,
        {
          mask: '+{375}(00)000-00-00'
        }
      )
    
    form.addEventListener('submit', async(e) => {
        e.preventDefault();
        validation(arrayInputs);
        if(checkWarning(arrayInputs)){
            const formData = new FormData(form);
            const result = await sendForm(formData);
            if(result.status === 'success'){
                clearForm(arrayInputs);
                btnSubmit.value = result.message;
                btnSubmit.disabled = true;
                setTimeout(() => {btnSubmit.value = "Submit"; btnSubmit.disabled = false}, 2000);
                removeWarning(btnSubmit);
            } else {
                createWarning(btnSubmit, `${result.message}. Please try again!`);
            }
        }
    })

}