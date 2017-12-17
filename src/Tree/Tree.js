import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import randomInt from 'random-int'

import './Tree.css'

class Tree extends PureComponent {
  componentWillMount () {
    const {
      index,
      total
    } = this.props

    this.leaves = randomInt(3, 4)

    this.initialPosition = {
      fontSize: `${randomInt(75, 125) / 100}em`,
      bottom: `${randomInt(34, 37)}%`,
      left: `${((100 / total) * index) + (randomInt(50, 100) / 10)}%`
    }
  }

  render () {
    const {
      leaves
    } = this

    return (
      <div className='Tree' style={{
        ...this.initialPosition,
      }}>
        {[...Array(leaves).keys()].map(i => (
          <i key={i} className='Leaves' />
        ))}
        <i className='Trunk' />
      </div>
    )
  }
}

Tree.propTypes = {
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}

export default Tree
