import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.header`
  background-color: HotPink;
  color: white;
`

const Title = styled.span`
  font-size: 2.5rem;
`

const NavLinks = styled.span`
  height: 100%;
  margin-left: auto;
  margin-right: 0;
  width: 100%;
`

const NavLink = styled(Link)`
  margin-right: 1rem;
  font-size: 1.5rem;
  height: 100%;
  color: #FFF;
  &:hover {
     color: LightSkyBlue;
  }
`

const Nav = () => (
  <Header>
    <div className='container'>
      <Title>Styling Birds 💅</Title>
      <NavLinks>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/stylesheet'>Stylesheet Demo</NavLink>
      </NavLinks>
    </div>
  </Header>
)

export default Nav
