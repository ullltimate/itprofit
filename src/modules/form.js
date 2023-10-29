import IMask from 'imask';
import { validation } from './validation';

export function form(){
    const inputName = document.getElementById('name');
    const inputEmail = document.getElementById('email');
    const inputPhone = document.getElementById('phone');
    const inputMessage = document.getElementById('message');
    const form = document.querySelector('.contacts-form');
    const arrayInputs = [inputName, inputEmail, inputPhone, inputMessage];

    IMask(
        inputPhone,
        {
          mask: '+{375}(00)000-00-00'
        }
      )
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validation(arrayInputs);
    })

}