import { auth } from "../../firebase/firebase";

export const SIGN_IN = "SIGN_IN";
export const REMOVE_USER = "REMOVE_USER"
export var signin = (userObj)=>async(dispatch)=>{
    try {
        var {email,password} = userObj;
    var {user} = await auth.signInWithEmailAndPassword(email,password)
    return true;
    
    } catch (error) {
        console.log(error)
        return false
    }
}
export var signout = ()=>{
    return async (dispatch)=>{
        await auth.signOut()
    
    }
}

export var signInUser = (userObj)=>({
    type:SIGN_IN,
    payload:{
        userObj
    }
})

export var removeUser = ()=>({
    type:REMOVE_USER,
    payload:{
        userObj:{
            currentUser:null
        }
    }
})