import './styles/index.scss'
import { showModal } from './modules/modal';
import { form } from './modules/form';
import { content } from './modules/content';

function App(){
    const main = document.querySelector('main');
    main.innerHTML = content;
    showModal();
    form();
}

App();
