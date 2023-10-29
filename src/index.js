import './styles/index.scss'
import { showModal } from './modules/modal';
import IMask from 'imask';

showModal();

IMask(
    document.getElementById('phone'),
    {
      mask: '+{375}(00)000-00-00'
    }
  )
