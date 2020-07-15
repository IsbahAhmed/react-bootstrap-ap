
import { SET_PRODUCTS, ADD_PRODUCTS,EDIT_PRODUCT, DLT_PRODUCT } from "./productsConstants"
import { firestore } from "../../firebase/firebase"
import firebase from "../../firebase/firebase"
export var fetchProducts = ()=> async (dispatch)=>{
    var products = []
    try {
        var productSnap = await firestore.collection("products").get()
        productSnap.forEach((doc)=>{
            products.push({...doc.data(),productId:doc.id})
        })
    } catch (error) {
        console.log(error.message)
    }
// fetch query
dispatch({
    type:SET_PRODUCTS,
    payload:{
        products
    }
})
}
 
export var addNewProduct = (productObj)=> async (dispatch)=>{
    try {
        var createdProduct = await firestore.collection('products').add(productObj)
       
       dispatch({
           type:ADD_PRODUCTS,
           payload:{
               productObj:{...productObj,productId:createdProduct.id}
           }
       })
    } catch (error) {
        console.log(error)
    }
}
export var editProduct = (productObj,productId)=> async (dispatch)=>{
try {
    var createdProduct = await firestore.collection('products').doc(productId).update()

   dispatch({
       type:EDIT_PRODUCT,
       payload:{
           productObj:{...productObj,productId}
           ,productId
       }
   })
} catch (error) {
    console.log(error)
}
}
export var deleteProduct = (productId,imagesLinks)=> async (dispatch)=>{
 
    try {
        imagesLinks.forEach(async (imgUrl)=>{
            console.log(imgUrl)
            var orgRef = firebase.storage().refFromURL(imgUrl.org_link)
            var compRef =  firebase.storage().refFromURL(imgUrl.comp_link);
            await orgRef.delete();
            await compRef.delete()
         
        })
        await firestore.collection('products').doc(productId).delete()
        alert("Deleted")
       dispatch({
           type:DLT_PRODUCT,
           payload:{
               
               productId
           }
       })
    } catch (error) {
        console.log(error)
    }
    }