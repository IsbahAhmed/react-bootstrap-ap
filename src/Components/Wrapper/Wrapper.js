import React, { Component } from 'react'

import styled from 'styled-components'
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';




 class Wrapper extends Component {
    WrapperLayout = styled.div`
    display:flex;
    height:min-content;
    `;
    state = {
        sideBarActive: true
    }
    handleSideBarToggler = (value)=>{
        value = !value;
        this.setState(prev =>({
            sideBarActive: value
        }))
    }
    render() {
        
        return (
            
                  <this.WrapperLayout>
         <Sidebar sidebarActive={this.state.sideBarActive}/>
        <MainContent handleSideBarToggler={this.handleSideBarToggler} sideBarActive={this.state.sideBarActive}/>
        
     </this.WrapperLayout>
            
        )
    }
}


export default Wrapper
