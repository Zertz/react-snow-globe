import React from 'react'
import ReactDOM from 'react-dom'
import Globe from './Globe'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Globe />, div)
})
