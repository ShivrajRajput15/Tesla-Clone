import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>

            <Section
                title="CAR - 2"
                description="Order Online For Touchless Delivery "
                backgroundImg="model-s.jpg"
                leftbtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="CAR - X"
                description="Order Online For Touchless Delivery "
                backgroundImg="model-x.jpg"
                leftbtnText="Custom order"
                rightBtnText="Existing inventory" />
            <Section
                title="CAR - Y"
                description="Order Online For Touchless Delivery "
                backgroundImg="model-y.jpg"
                leftbtnText="Custom order"
                rightBtnText="Existing inventory" />
            <Section
                title="CAR - 3"
                description="Order Online For Touchless Delivery "
                backgroundImg="model-3.jpg"
                leftbtnText="Custom order"
                rightBtnText="Existing inventory" />
        </Container>
    )
}

export default Home

const Container = styled.div`
height: 100vh;
`