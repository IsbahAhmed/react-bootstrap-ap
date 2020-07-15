import React, { Component } from 'react'

import styled , {ThemeProvider} from 'styled-components'
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';




 class Wrapper extends Component {
     colors = {
         black:"black"
     }
    WrapperLayout = styled.div`
 
    display:flex;
    height:min-content;
 
    `;
  
    render() {
        
        return (
            <ThemeProvider theme={this.colors}>
                <this.WrapperLayout>
         <Sidebar />
        <MainContent />
        
     </this.WrapperLayout>
            </ThemeProvider>
                  
            
        )
    }
}


export default Wrapper
