var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    // res.send("Hello World");
    let cars =[{
        name:"Ford",
        category:"Car",
        image:"https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        name:"Tata",
        category:"Car",
        image:"https://images.unsplash.com/photo-1626019240499-926f8bf154c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGF0YSUyMGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {  
        name:"Bugati",
        category:"car",
        image:"https://images.unsplash.com/photo-1600712242805-5f78671b24da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVnYXR0aXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    }
]
    res.render('items',{cars});
});

module.exports = router;