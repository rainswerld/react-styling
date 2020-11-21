import React from 'react'
import SolidButton from '../shared/SolidButton'
import OutlineButton from '../shared/OutlineButton'
import { Link } from 'react-router-dom'

const Home = () => {
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1573994824701-f3c848695ab0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'

  const homeStyles = {
    /* Center the heading inside the container */
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    /* Set background image */
    backgroundImage: `url(${backgroundImageUrl})`,
    /* Covers the entire width of the div */
    backgroundSize: 'cover',
    /* Center the background */
    backgroundPosition: 'center',

    /* Take up half the viewport's height, (50 out of 100) */
    height: '100vh',

    color: 'HotPink',
    textAlign: 'center'
  }

  return (
    <div style={homeStyles}>
      <div>
        <h1>Styling Birds 💅</h1>
        <Link to='/about'>
          <SolidButton primaryColor='HotPink'>About Us</SolidButton>
        </Link>
        <Link to='/stylesheet'>
          <OutlineButton primaryColor='LightSkyBlue'>Stylesheet Demo</OutlineButton>
        </Link>
      </div>
    </div>
  )
}
export default Home
