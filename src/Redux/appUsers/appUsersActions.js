import { firestore } from "../../firebase/firebase";
import { SET_APP_USERS } from "./appUsersConstants";


export var fetchAppUsers = ()=>async (dispatch)=>{
    try {
        var users = [];
        var usersSnap = await firestore.collection('users').get();
        usersSnap.forEach(doc =>{
            users.push({...doc.data(),uid:doc.id})
        })
        dispatch({
            type: SET_APP_USERS,
            payload:{
                users
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}