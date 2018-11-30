import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    min-height:80vh;
    background: 
    linear-gradient(
      rgba(26, 52, 94, 0.45), 
      rgba(26, 52, 94, 0.45)
    ),
    url('https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=452c9055d0f7d7db744fb505f6d7fd68&auto=format&fit=crop&w=1350&q=80');
    background-repeat: no-repeat;
    background-size: 100%;
    color: #fff;
`

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem;
`
const NavRight = styled.div`
    display: flex;
    padding-right: 1rem;
    font-size: 0.8rem;
    font-weight: 400;
`
const NavLogo = styled.div`
    font-size: 1rem;
    font-weight: 700;
`

const NavRightItem = styled.p`
    margin: 0 1rem;
    &:hover {
    border-bottom: solid 1px #ffd54d;
  }
`
const HeroTitle = styled.p`
    font-size: 5em;
    text-align: center;
    position: absolute;
    padding-top: 10rem;
    width: 100%;
    font-weight: 400;
`    
const HeroContent = styled.p`
    font-size: 1.5em;
    text-align: center;
    position: absolute;
    padding-top: 20rem;
    width: 100%;
    font-weight: 400;
`

class Hero extends React.Component {
    render() {
        return (
            <Wrapper>
                <Nav>
                    <NavLogo>BOOGIE-WOOGIE</NavLogo>
                    <NavRight>
                        <NavRightItem>HOME</NavRightItem>
                        <NavRightItem>EXPLORE</NavRightItem>
                        <NavRightItem>SIGN IN</NavRightItem>
                    </NavRight>
                </Nav>
                <HeroTitle>Daily Art ONLY for you</HeroTitle>
                <HeroContent>"life is short art is long"</HeroContent>
            </Wrapper >
        )
    }
}

export default Hero