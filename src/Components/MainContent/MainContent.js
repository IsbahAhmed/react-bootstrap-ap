import React from 'react'
import Navigation from '../Navigation/Navigation'
import styled, { ThemeProvider } from 'styled-components'
import {Container} from "react-bootstrap"
import { Route, Switch } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Layout from '../../Pages/Layout/Layout'
import Profile from '../../Pages/Profile/Profile'
import Allproducts from '../../Pages/Allproducts/Allproducts'
import AllOrders from '../../Pages/AllOrders/AllOrders'
import AllUser from '../../Pages/AllUsers/AllUser'
import ManageCatagories from '../../Pages/ManageCatagories/ManageCatagories'
import ManageSlider from '../../Pages/ManageSlider/ManageSlider'
import Contacts from '../../Pages/Contacts./Contacts'
import AddNewProduct from '../../Pages/AddNewProduct/AddNewProduct'

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
           <Navigation />
           <Container fluid className="bg-light mt-5" style={{minHeight:"1000px"}}>
            <Switch>
            <Route path='/' component={Home} exact/>
           
            <Route path='/dashboard/profile' component={Profile} exact/>
            <Route path='/manage_products/:productType' component={Allproducts} exact/>
            <Route path='/manage_products/crud_product/:productId' component={AddNewProduct} exact/>

            <Route path='/manage_orders/:pagetype' component={AllOrders} exact/>
            <Route path='/manage_users/:pagetype' component={AllUser} exact/>
            <Route path='/manage_catagories/' component={ManageCatagories} exact/>
            <Route path='/manage_slider/' component={ManageSlider} exact/>
            <Route path='/contacts/Messages' component={Contacts} exact/>

            
            </Switch>
           </Container>
        </MainContentStyle>
       </ThemeProvider>
    )
}

export default MainContent
