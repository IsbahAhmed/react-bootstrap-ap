import React from 'react'
import Navigation from '../Navigation/Navigation'
import styled, { ThemeProvider } from 'styled-components'
import {Container} from "react-bootstrap"
import { Route, Switch } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Layout from '../../Pages/Layout/Layout'
import Profile from '../../Pages/Profile/Profile'

const theme = {
    light:{
        background: "#fff",
        color:"black",

    },
    dark:{
        bakground:"black",
        color:"white"
    }
}

const MainContentStyle = styled.div`
width:100%;

`;
const MainContent = (props) => {
    return (
       <ThemeProvider theme={theme}>
            <MainContentStyle >
           <Navigation handleSideBarToggler={props.handleSideBarToggler} sideBarActive={props.sideBarActive}/>
           <Container fluid className="bg-light mt-5" style={{minHeight:"1000px"}}>
            <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/dashboard/layout' component={Layout} exact/>
            <Route path='/dashboard/profile' component={Profile} exact/>
                        
            </Switch>
           </Container>
        </MainContentStyle>
       </ThemeProvider>
    )
}

export default MainContent
