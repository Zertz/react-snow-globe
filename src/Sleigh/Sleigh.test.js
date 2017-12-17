import React from 'react'
import ReactDOM from 'react-dom'
import Sleigh from './Sleigh'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Sleigh />, div)
})
