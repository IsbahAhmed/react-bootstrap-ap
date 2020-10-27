import {firestore} from "../../firebase/firebase"

export const SET_MESSAGES  = "SET_MESSAGES";

export var fetchMessages = ()=>async(dispatch)=>{
    try {
        var messages = [];
        var messagesSnap = await firestore.collection('contact_messages').get();
        messagesSnap.forEach((doc)=>{
            messages.push({...doc.data(),msgId:doc.id})
        })
        dispatch({
            type: SET_MESSAGES,
            payload:{
                messages
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}