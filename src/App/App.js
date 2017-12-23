import React, { PureComponent } from 'react'

import './App.css'

import Globe from '../Globe'
import Ground from '../Ground'
import Sleigh from '../Sleigh'
import Snowflake from '../Snowflake'
import Star from '../Star'
import Tree from '../Tree'

class App extends PureComponent {
  componentWillMount() {
    this.snowflakes = Math.round(document.documentElement.clientWidth / 25)
    this.stars = Math.round(document.documentElement.clientWidth / 100)
    this.trees = Math.round(document.documentElement.clientWidth / 300)
  }

  render () {
    const {
      snowflakes,
      stars,
      trees
    } = this

    return (
      <div className='App'>
        {[...Array(stars).keys()].map(i => (
          <Star
          key={i}
          index={i}
          total={stars}
          />
        ))}
        <Globe />
        <Ground />
        {[...Array(trees).keys()].map(i => (
          <Tree
          key={i}
          index={i}
          total={trees}
          />
        ))}
        <Sleigh />
        {[...Array(snowflakes).keys()].map(i => (
          <Snowflake
            key={i}
            index={i}
            total={snowflakes}
          />
        ))}
        <iframe
          title="Michael Bublé - Christmas"
          width="0"
          height="0"
          src="https://www.youtube-nocookie.com/embed/CTKosftpsZA?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1"
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen />
      </div>
    )
  }
}

export default App
