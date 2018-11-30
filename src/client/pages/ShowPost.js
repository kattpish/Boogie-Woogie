import React from "react"
import styled from "styled-components"

import { db } from '../../firebase/firebase'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    padding: 150px;
    justify-items: center;
`

const Image = styled.img`
    width: 360px;
    height: 220px;
    border-radius: 1rem 1rem 0 0;
`

const Title = styled.p`
    font-size: 1rem;
    color: #323232;
    font-weight: 500;
    margin: 0.5rem;
`

const Artist = styled.p`
    font-size: 0.8rem;  
    color: #ff9800;
    font-weight: 500;
    margin: 0.5rem;
`

const PostItem = styled.div`
    border-radius: 1rem;
    box-shadow: 6px 8px 16px -15px rgba(0,0,0,0.5);
    margin: 1.5rem;
    width: 360px;
    &:hover {
        box-shadow: 15px 17px 25px -15px rgba(0,0,0,0.5);
        transition: 0.3s;
      }
`

const Description = styled.p`
    font-size: 0.8rem;
    font-weight: 400;
    width: 16rem;
    margin: 0.5rem 0.5rem 1rem 0.5rem;
`

const ContentWrapper = styled.div`
    margin: 0.5rem;
`

class ShowPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = { wallpapers: [] } 
    }

    componentDidMount() {
        db.ref('wallpapers').once('value').then(snapshot =>
            this.setState({ wallpapers: snapshot.val() }))
    }


    render() {
        const { wallpapers } = this.state
        return(
            <Wrapper>
                {wallpapers && wallpapers.map((post, i) => {
                    return (<PostInfo src={post.src} name={post.name} artist={post.artist} description={post.description} key={i}/> )
                })}
            </Wrapper>
        )
    }
}

class PostInfo extends React.Component {
    render() {
        return(
            <PostItem onclick="location.href={this.props.url}">
                <Image src={this.props.src}></Image>
                <ContentWrapper>
                    <Title>{this.props.name}</Title>
                    <Artist>{this.props.artist}</Artist>
                    <Description>{this.props.description}</Description>
                </ContentWrapper>
            </PostItem>
        )
    }
}

export default ShowPost