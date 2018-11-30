import React from "react"
import styled from "styled-components"

import ShowPost from "./ShowPost"

const Wrapper = styled.div`
    margin: 5rem auto;
    height: 100%;
    padding: 10px;
`
const Title = styled.p`
    font-size: 1.3rem;
    font-weight: 500;
    text-align: center;
`

class Board extends React.Component {
    render() {
        return (
            <Wrapper>
                <Title>Art Wallpaper List</Title>
                <ShowPost></ShowPost>
            </Wrapper >
        )
    }
}

export default Board