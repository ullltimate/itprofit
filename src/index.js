import './styles/index.scss'
console.log("Hello world!");

const heading = document.createElement('h1')
heading.textContent = 'Hello world!'

const root = document.querySelector('#root')
root.append(heading)