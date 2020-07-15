import { ADD_CATAGORY, SET_CATAGORIES, EDIT_CATAGORY, DLT_CATAGORY } from "./catagoryConstants"
import { firestore } from "../../firebase/firebase"


export var addnewcatagory = (catObj)=>async(dispatch)=>{

   try {
    var createdCatagory = await firestore.collection("catagories").add(catObj)
   } catch (error) {
       console.log(error.message)
   }

    dispatch({
        type:ADD_CATAGORY,
        payload:{
            catObj:{...catObj,catId:createdCatagory.id}
        }
    })
}

export var fetchCatagories = ()=>async(dispatch)=>{
try {
    var catagories = [];
    var catagoriesSnap  = await firestore.collection("catagories").get()
    catagoriesSnap.forEach((doc)=>{
        catagories.push({...doc.data(),catId:doc.id})
    })
dispatch({
    type:SET_CATAGORIES,
    payload:{
        catagories
    }
})
} catch (error) {
    console.log(error.message)
}

}
export var editCatagory = (catObj,catId) => async (dispatch)=>{
   
try {
    await firestore.collection('catagories').doc(catId).update(catObj)
    alert("Updated")
    dispatch({
        type:EDIT_CATAGORY,
        payload:{
            catObj,catId
        }
    })
} catch (error) {
    console.log(error.message)
}
}
export var deleteCatagory = (catId)=>async(dispatch)=>{
try {
    await firestore.collection('catagories').doc(catId).delete()
    alert("deleted");
    dispatch({
        type:DLT_CATAGORY,
        payload:{
            catId
        }
    })
} catch (error) {
    console.log(error.message)
}
}