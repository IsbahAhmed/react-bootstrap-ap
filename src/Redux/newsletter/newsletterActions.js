import { firestore } from "../../firebase/firebase";

export const SET_NEWSLETTER = "SET_NEWSLETTER";

export var fetchNewsletterSubs = ()=>async(dispatch)=>{
    try {
        var newsLetterSubs = [];
        var newsletterSnap = await firestore.collection('newsletter_subcriptions').get();
        newsletterSnap.forEach((sub)=>{
            newsLetterSubs.push({...sub.data(),subId:sub.id})
        })
        dispatch({
            type: SET_NEWSLETTER,
            payload:{
                newsLetterSubs
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}