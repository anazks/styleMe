const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://user:123@cluster0.kop4wrn.mongodb.net/StyleMe?retryWrites=true&w=majority&appName=Cluster0")
}
  
module.exports = connect;