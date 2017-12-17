import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import randomInt from 'random-int'

import './Star.css'

class Star extends PureComponent {
  componentWillMount () {
    const {
      index,
      total
    } = this.props

    const topOffset = randomInt(5, 70)

    this.initialPosition = {
      backgroundColor: `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, 0.0625)`,
      fontSize: `${randomInt(5, 10) / 10}em`,
      top: `${topOffset}%`,
      left: `${((100 / total) * index) + (randomInt(-25, 25) / 10)}%`
    }
  }

  render () {
    return (
      <i className='Star' style={{
        ...this.initialPosition,
      }} />
    )
  }
}

Star.propTypes = {
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}

export default Star
