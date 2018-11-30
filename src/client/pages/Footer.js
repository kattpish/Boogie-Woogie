import React from "react"
import styled from "styled-components"


const Wrapper = styled.div`
    padding: 10rem;
    background-color: #424e60;
`

const FooterItem = styled.p`
    font-size: 2rem;
    color: #fff;
    font-weight: 700;
    text-align: center;
`

class Footer extends React.Component {
    render() {
        return (
            <Wrapper>
                <FooterItem>BOOGIE-WOOGIE</FooterItem>
            </Wrapper >
        )
    }
}

export default Footer