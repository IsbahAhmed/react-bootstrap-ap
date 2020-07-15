import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from "styled-components"
 class Weather extends Component {
//      componentDidMount = async()=> {
//          var query = await
//  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&APPID=0d9b8b002e494519ad7ac35442bfb8be

//          `)
//         var obj = await query.json()
//          console.log(obj)
//          var weatherObj = {
//              weatherInfo:obj.weather[0],
//              windInfo:obj.wind,
//              mainInfo:obj.main,
//              date:obj.dt,
//              timezone:obj.timezone
//          }
//          this.handleWeatherUpdate(weatherObj)
        
//      }
     

// convertKelvinToCelsius(kelvin) {
// 	if (kelvin < (0)) {
// 		return 'below absolute zero (0 K)';
// 	} else {
//     var ans = Math.round(kelvin-273.15)
// 		return (ans);
// 	}
// }
//      handleWeatherUpdate(weatherObj){
//          var {weatherInfo,windInfo,mainInfo,date,timezone} = weatherObj;
//          var tempreture = this.convertKelvinToCelsius(mainInfo.temp)
//          var realFeel = this.convertKelvinToCelsius(mainInfo.feels_like);
//          this.setState((prevState)=>({
//              ...prevState,tempreture,realFeel,
//              date,timezone,wind:windInfo.speed,description:weatherInfo.description
//          }))
//      }
//      state = {
//          cityName:"karachi"
         
//      }
//      Style = styled.div`
//      .main{
//          height:180px;
//          color:white;
      
//          background:linear-gradient(rgba(0, 0, 0, 0.548),rgba(0, 0, 0, 0.548)), url("data:image/jpeg;base64,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");
//          background-repeat:no-repeat;
//          background-size:100% 100% , cover;
//       h1{
//           text-transform:uppercase
//       }   
//      }
//      `
    render() {
        // var {cityName,tempreture,realFeel,date,description,wind} = this.state
        return (
                <div className="">
                        {/* //     <Container>
        //        <this.Style>
        //        <Row className="my-3">
        //             <Col className="main" md={6}> 
        //             <Row>
        //                 <Col className="d-flex justify-content-center align-items-center">
        //                 <h1>{cityName}</h1>
        //                 </Col>
        //                 <Col className="d-flex justify-content-center align-items-center pt-2 flex-column">
        //             <h1>{tempreture}&#176;C</h1>
        // <p>Real Feel: {realFeel}&#176;C</p>
        //             </Col>
        //             </Row>
        //             <Row>
        //                 <Col className="d-flex justify-content-between align-items-center">
        // <p className="">{description}</p>
        // <p className="">Wind Speed : {wind} Km/h</p>
        //                 </Col>
        //             </Row>
        //             </Col>
                   
        //         </Row>
        //        </this.Style>
        //     </Container> */}
                </div>
        )
    }
}

export default Weather
