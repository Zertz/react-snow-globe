import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import randomInt from 'random-int'

import injectStyle from '../injectStyle'

import './Snowflake.css'

class Snowflake extends PureComponent {
  componentWillMount () {
    const {
      index,
      total
    } = this.props

    const animationName = `snowflake-${index}`
    const topOffset = randomInt(1, 99)

    this.initialPosition = {
      animationName,
      animationDuration: `${randomInt(12500, 27500)}ms`,
      fontSize: `${randomInt(5, 10) / 10}em`,
      top: `${topOffset}%`,
      left: `${(100 / total) * index}%`
    }

    const sideOffset = topOffset % 2 ? 10 : -10

    injectStyle(`
      @keyframes ${animationName} {
        0% {
          transform: translateX(0em) translateY(0%);
        }
        ${100 - topOffset}% {
          transform: translateX(${((100 - topOffset) / 100) * sideOffset}em) translateY(${100 - topOffset}%);
        }
        ${100 - topOffset + 0.001}% {
          transform: translateX(${((topOffset * -1) / 100) * sideOffset}em) translateY(calc(${topOffset * -1}% - 1em));
        }
        100% {
          transform: translateX(0em) translateY(0%);
        }
      }
    `.trim())
  }

  render () {
    return (
      <i className='Snowflake' style={this.initialPosition}>❆</i>
    )
  }
}

Snowflake.propTypes = {
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
}

export default Snowflake
