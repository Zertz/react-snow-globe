import React from 'react'
import ReactDOM from 'react-dom'
import Snowflake from './Snowflake'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Snowflake />, div)
})
