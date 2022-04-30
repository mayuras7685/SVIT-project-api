var mongoose = require("mongoose")

var Schema = mongoose.Schema

var AuthorSchema = new Schema({
  username: { type: String, required: true, maxLength: 100 },
  password: { type: String, required: true, maxLength: 100 },
  emailid: { type: String, required: true, maxLength: 100 },
  roomid: { type: String, required: true, maxLength: 100 },
  roomcode: { type: String, required: true, maxLength: 100 },
  happinessindex: { type: String, required: true, maxLength: 100 },
})

// Virtual for author's URL
AuthorSchema.virtual("url").get(function () {
  return "/catalog/author/" + this._id
})

//Export model
module.exports = mongoose.model("Author", AuthorSchema)
