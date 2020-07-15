import { SIDEBAR_TOGGLE } from "./ui_constants";

export var sidebarToggler = (sidebarActiveValue)=>({
    type:SIDEBAR_TOGGLE,
    payload:{
        sidebarActiveValue
    }
})