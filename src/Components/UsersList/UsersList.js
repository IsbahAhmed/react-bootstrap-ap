import React, { Fragment } from 'react'
import UsersListItem from '../UsersListItem/UsersListItem'
import { connect } from 'react-redux'
import { fetchAppUsers } from '../../Redux/appUsers/appUsersActions'
import { useState } from 'react'
import { useEffect } from 'react'

const UsersList = ({fetchAppUsers,usersType,appUsers}) => {
    const [usersToShow,setUsersToShow] = useState([]);
    useEffect(()=>{
    
     
    },[usersType])
    useEffect(()=>{
        if(!appUsers.length){
            fetchAppUsers()
        }
    },[])
    /// pop all users which are joined in this week
    var newUserPoper = (appUsers)=>{
        var tempArr = [];
        var date_oneWeekBefore = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      appUsers.forEach((user)=> {
           var date = new Date(user.createdAt.toDate().toISOString().split('T')[0]);
        if(date.getTime() >= date_oneWeekBefore.getTime()){
            tempArr.push(user)
        }
       } )
    return tempArr
    }
    
    useEffect(()=>{
        if(appUsers.length ){
            if(usersType === "new_users"){

                setUsersToShow([...newUserPoper(appUsers)])
            }
            else{

                setUsersToShow([...appUsers])
            }
        }
    },[appUsers,usersType])
    var count = 1;
    return (
       <Fragment>
           {
               usersToShow ? usersToShow.map(user=><UsersListItem count={count++} userObj={user} key={user.uid}/>)
               : <h3 className="text-center">No users found</h3>
           }
       </Fragment>
    )
}
var mapState = (state)=>({
    appUsers : state.appUsers
})
var actions ={
fetchAppUsers
}
export default connect(mapState,actions)(UsersList)
