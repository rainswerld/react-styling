import React from 'react'

const HeroGradient = () => {
  const homeStyles = {
    /* Center the heading inside the container */
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    /* Add radial gradiant in a circle from pink at the center, to blue at the edge */
    /* Made with: https://cssgradient.io/ */
    background: 'radial-gradient(circle, LightSkyBlue 0%, #4B6BAA 80%)',

    /* Take up half the viewport's height, (50 out of 100) */
    height: '30vh',

    color: 'HotPink'
  }

  return (
    <div style={homeStyles}>
      <h1>The Coolest Birds In Town</h1>
    </div>
  )
}

export default HeroGradient
