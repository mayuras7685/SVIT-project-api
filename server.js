const express = require("express")
const bp = require("body-parser")

// const req = require("express/lib/request")
// const res = require("express/lib/response")
const app = express()

app.use(bp.json())

const users = [{
  username:'keval',
  password:'999'
}]

// connectToMongo()

/* GET login page. */
app.post("/login", (req, res, next) => {
  const userData = req.body
  var found = false
  console.log('loging in')

  users.map((user) => {
    console.log(user, userData)
    if (user.username === userData.username && user.password === userData.password) {
      found = true
      console.log('found')
      res.json("0")
    }
  })
  if (found === false) {
    res.json("1")
  }
  // res.send("../pages/Login.js", { title: "Login" })
})

/* register routes. */
app.post("/register", (req, res) => {
  const { username, email, password } = req.body.userData;
  
  users.push({username:username,email:email,password:password})

  console.log('registered')
  res.json('0')
});


app.listen(3005)
