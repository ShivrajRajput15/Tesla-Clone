import React from 'react'
import styled from "styled-components"

function Section({ title, description, leftbtnText, rightBtnText, backgroundImg }) {
    // console.log(props);
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {leftbtnText}
                    </LeftButton>
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url('/images/model-s.jpg');
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: ${props => `url("/images/${props.bgImage}")`}

`

const ItemText = styled.div`
padding-top: 10vh;
text-align: center;

`
const ButtonGroup = styled.div`
display: flex;
margin-bottom: 20px;
`
const LeftButton = styled.div`
background-color: black;
height: 50px;
width: 250px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.7;
text-transform: uppercase;
font-size: 10px;
cursor: pointer;
`
const RightButton = styled(LeftButton)`
background-color: white;
opacity: 0.6;
color: black;
`
// const rightbtn = styled.div`

// `
const DownArrow = styled.img`
height: 40px;
margin-top: 10px;

`
const Buttons = styled.div`

` 