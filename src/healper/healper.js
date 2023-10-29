export const urlApi = 'http://localhost:9090';

export function createWarning(elem, messageWarning){
    if(elem.type != 'submit') elem.style.border = "1px solid red";
    if (!elem.nextElementSibling){
        const parentInput = elem.parentNode;
        const warning = document.createElement('p');
        warning.className = 'contacts-form__content-warning';
        warning.textContent = messageWarning;
        parentInput.append(warning);
    }
}

export function removeWarning(elem){
    elem.style.border = "none";
    if (elem.nextElementSibling){
        elem.nextElementSibling.remove();
    }
}

export function checkWarning(arrayInputs){
    return arrayInputs.every(e => !e.nextElementSibling)
}

export function clearForm(arrayInputs){
    arrayInputs.forEach(e => e.value = '');
}