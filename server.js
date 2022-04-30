const Author = require("./Author")
const connectToMongo = require("./database")
var express = require("express")
const { db } = require("./Author")
const bp = require("body-parser")

const users = []

const app = express()
app.use(bp.json)

connectToMongo()
/* GET login page. */
app.post("/login", function (req, res, next) {
  const { username, password } = req.body
  var found = false

  users.map((user) => {
    if (user.username === username && user.password === password) {
      found = true
      res.json("0")
    }
  })
  if (found === false) {
    res.json("1")
  }
  // res.send("../pages/Login.js", { title: "Login" })
})
/* GET login page. */
app.get("/register", async (req, res, next) => {
  const { username, email, password } = req.body

  users.push({ username: username, email: email, password: password })
  // const data = {
  //   username: req.body.username,
  // }
  // try {
  //   // res.render("../pages/Register.js", { title: "Register" })
  //   const promise = await Author.insertOne(data)
  //   res.send(JSON.parse(promise))
  // } catch (error) {
  //   console.log(error)
  // }
})
app.listen(4000)
