import { faHome, faGlasses, faList, faUser, faTools, faEnvelope } from "@fortawesome/free-solid-svg-icons";


export var arrayOfitems = [{
    head:"Dashboard",
    icon:faHome,
    link:null,
 subMenu:[{
     name:"Home",
     link:"/"
 },
 {
     name:"Profile",
     link:"/dashboard/profile"
 }]
},
{
 head:"Manage Products",
 icon:faGlasses,
 link:null,
subMenu:[{
  name:"See all products",
  link:"/manage_products/all_products"
},
{
  name:"Add new Product",
  link:"/manage_products/crud_product/null"
}
]
}
,
{
 head:"Manage Orders",
 icon:faList,
link:null,
subMenu:[{
    name:"See all orders",
    link:"/manage_orders/all_orders"
},
{
    name:"New Orders",
    link:"/manage_orders/new_orders"
},
{
    name:"Pending Orders",
    link:"/manage_orders/pending_orders"
},
{
    name:"Completed Orders",
    link:"/manage_orders/completed_orders"
},
{
    name:"Cancelled Orders",
    link:"/manage_orders/cancelled_orders"
}
]
},
{
head:"Users",
icon:faUser,
link:null,
subMenu:[{
   name:"See all users",
   link:"/manage_users/all_users"
},
{
   name:"New Users",
   link:"/manage_users/new_users"
}

]
},
{
head:"Manage Site",
icon:faTools,
link:null,
subMenu:[{
    name:"Manage Catagories",
    link:"/manage_catagories/"
}
,
{
    name:"Manage Slider",
    link:"/manage_slider/"
}
]
},
{
head:"Manage Contacts",
icon:faEnvelope,
link:null,
subMenu:[{
    name:"Messages",
    link:"/contacts/Messages"
}
,
{
    name:"Newsletter Subcriptions",
    link:"/contacts/newsletter_subs"
}
]
}

]