import './styles/main.scss'
import Person from './scripts/Person'
import ExampleReactComponent from './scripts/ExampleReactComponent'
import Heade from './components/heade'
import React from 'react'
import ReactDOM from 'react-dom'

const person1 = new Person("Brad")
ReactDOM.render(<Heade />, document.querySelector("#movidavibes-header"))
ReactDOM.render(<ExampleReactComponent />, document.querySelector("#render-react-example-here"))