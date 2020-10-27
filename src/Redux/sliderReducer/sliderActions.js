import {firestore} from "../../firebase/firebase"
import { ADD_NEW_SLIDER_ITEM, SET_SLIDER, EDIT_SLIDER_ITEM, DELETE_SLIDER_ITEM } from "./sliderConstants";
export var addNewItemInSlider = (item)=>async (dispatch)=>{
    try {
      var addedItem =  await firestore.collection('slider_content').add(item);
        dispatch({
            type:ADD_NEW_SLIDER_ITEM,
            payload:{
                item:{...item,id:addedItem.id}
            }
        })
        return "success"
    } catch (error) {
        console.log(error.message);
        return "An error occured"
    }
}
export var fetchSliderItems = ()=>async(dispatch)=>{
    try {
        var sliderItems = [];
        var sliderrSnap = await firestore.collection('slider_content').get();
        sliderrSnap.forEach((doc)=>{
            sliderItems.push({...doc.data(),id:doc.id})
        })
        dispatch({
            type:SET_SLIDER,
            payload:{
                sliderItems
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}
export var editSliderItem = (item)=>async(dispatch)=>{
    console.log(item)
    try {
        await firestore.collection('slider_content').doc(item.id).set(item)
        dispatch({
            type:EDIT_SLIDER_ITEM,
            payload:{item}
        })
        return "success"
    } catch (error) {
        console.log(error.message)
        return "An error occured"
    }
}
export var deleteSliderItem = (itemId)=> async(dispatch)=>{
    try {
        await firestore.collection("slider_content").doc(itemId).delete()
        dispatch({
            type:DELETE_SLIDER_ITEM,
            payload:{
                itemId
            }
        })
        return "success"
    } catch (error) {
        console.log(error.message)
    }
}