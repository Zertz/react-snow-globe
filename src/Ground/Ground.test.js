import React from 'react'
import ReactDOM from 'react-dom'
import Ground from './Ground'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Ground />, div)
})
