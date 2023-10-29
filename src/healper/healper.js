export function createWarning(elem, messageWarning){
    elem.style.border = "1px solid red";
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