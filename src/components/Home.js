import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home() {
    return (
        <Container>
            <Section 
                title = "Model S"
                description = "Order Online for Touchless Delivery"
                backgroundImg = "model-s.jpg"
                leftButton = "Custom Order"
                rightButton = "Existing Inventory"
            />
            <Section 
                title = "Model Y"
                description = "Order Online for Touchless Delivery"
                backgroundImg = "model-y.jpg"
                leftButton = "Custom Order"
                rightButton = "Existing Inventory"
            />
            <Section 
                title = "Model 3"
                description = "Order Online for Touchless Delivery"
                backgroundImg = "model-3.jpg"
                leftButton = "Custom Order"
                rightButton = "Existing Inventory"
            />

            <Section 
                title = "Model X"
                description = "Order Online for Touchless Delivery"
                backgroundImg = "model-x.jpg"
                leftButton = "Custom Order"
                rightButton = "Existing Inventory"
            />

            <Section 
                title = "Lowest cost Solar Pnaels in America"
                description = "Money-back gaurantee"
                backgroundImg = "solar-panel.jpg"
                leftButton = "Order now"
                rightButton = "Learn more"
            />  

            <Section 
                title = "Solar for New Roofs"
                description = "Solar Roof Costs Less Than a New Roof Plus Solar Panel"
                backgroundImg = "solar-roof.jpg"
                leftButton = "Order now"
                rightButton = "Learn more"
            />  

            <Section 
                title = "Accessories"
                description = ""
                backgroundImg = "accessories.jpg"
                leftButton = "Shop Now"
            /> 

            
        </Container>
    )
}

export default Home


const Container = styled.div`
    height: 100vh;
`