import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <h1>
    hola mundo
  </h1>
`

setupCounter(document.querySelector('#counter'))
