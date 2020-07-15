import React from 'react'
import CatagoryForm from '../CatagoryForm/CatagoryForm';
import AddNewBtn from '../AddnewBtn/AddNewBtn';

const AddNewCatagory = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
             <CatagoryForm
             
    mode="add"
    show={modalShow}
    onHide={() => setModalShow(false)}
 />
 <AddNewBtn onClick={() => setModalShow(true)}/>
        </div>
    )
}

export default AddNewCatagory
