const express = require('require');
const session = require('express-session');
const app = express();

app.use(express.json());
app.use(
  session({
    secret:"mySecretKey",
    resave:false,
    saveUninitialized:false,
    cookie:{secure:false} 
  })
);

const USER={
  username:"admin",
  password:"1234"
};

function isAuth(req,res,next) {
  if (req.session.user) {
    return next();
  }
  return res.status(401).send("Unauthorized");
}

app.post("/login",(req,res) => {
  const {username,password }=req.body;

  if (username===USER.username && password===USER.password) {
    req.session.user=username;
    return res.send("Login Successful");
  }

  return res.status(401).send("Invalid");
});

app.get("/dashboard",isAuth,(req,res)=>{
  res.send(`Welcome to your dashboard`);
});

app.get("/logout",(req, res)=>{
  req.session.destroy((err)=>{
    if(err){
      return res.status(500).send("Error");
    }
    res.send("Logged Out Successfully");
  });
});

app.listen(8000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Server is running on port");
})