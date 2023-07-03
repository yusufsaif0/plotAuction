const mongoose = require("mongoose");

const RegisterUser = new mongoose.Schema(
  {
    fullname: { type: String },

    email: { type: String, required: true },

    phone: { type: Number },    
    
    password: { type: String },

    
  },
  { collection: "Users" }
);

const user = new mongoose.model("Users", RegisterUser);

module.exports = user;
