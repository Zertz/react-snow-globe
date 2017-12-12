import React, { Component } from 'react'

import './App.css'

import Globe from '../Globe'
import Snowflake from '../Snowflake'

class App extends Component {
  constructor (props) {
    super(props)

    this.snowflakes = 100
  }

  render () {
    return (
      <div className='App'>
        {[...Array(this.snowflakes).keys()].map(i => (
          <Snowflake key={i} index={i} total={this.snowflakes} />
        ))}
        <Globe />
      </div>
    )
  }
}

export default App
