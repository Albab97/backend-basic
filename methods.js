const express = require('express');

const app = express();
app.use(express.json());
app.listen(3000);

let users=[
    {
        'id':1,
        'name':"Abhishek"
    },{
        'id':2,
        'name':"Jasbir"
    },{
        'id':3,
        'name':"Kartik"
    }
];

// app.get('/user',
// })
// // whatever data we send from frontend to backend , it goes to the body of req.
// app.post('/user',)
// //patch -> update
// app.patch('/user',)
// // to delete data
// app.delete('/user',); 

//Mini-app
const userRouter = express.Router();
app.use("/user",userRouter);

userRouter
.route("/")
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser);

userRouter.route("/:id").get(getUserById);

function getUser(req,res){
    console.log(req.query);
    res.send(users);
}
function postUser(req,res){
    console.log(req.body);
    users=req.body;
    res.json({
        message:"data received successfully."
    });
};
function updateUser(req,res){
    console.log('req.body ->',req.body);
    let dataToBeUpdated = req.body;
    for(key in dataToBeUpdated){
        users[key]=dataToBeUpdated[key];
    }
    res.json({
        message:"data patched successfully."
    });
};
function deleteUser(req,res){
    users={};
    res.json({
        message:"data has been deleted"
    });
};
function getUserById(req,res){
    console.log(req.params.id);
    let paramId = req.params.id;
    let obj={};
    for(let i=0;i<users.length;i++){
        if(users[i]['id']==paramId){
            obj=users[i];
        }
    }
    res.json({
        message:"req received",
        data:obj
    });
};
// Params
// app.get('/user/:username',);
