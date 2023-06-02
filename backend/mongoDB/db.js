//Importation of Mongoose:
const mongoose = require('mongoose');

//Importation of dotenv for environment variables :
const dotenv = require("dotenv").config();


//Conection de mongoDB à l'API grâce à mongoose :

  mongoose.connect("mongodb+srv://AYUSHJOLLY:v0A6k3idM3TENquD@ayushjolly.dqr4hhp.mongodb.net/?retryWrites=true&w=majority")
  .then(()=>{
  console.log("successfully connection with mongoose");
  })

  .catch((error)=>{
  console.log("Unable to connect to mongoDB Atlas");
  console.error(error);

  });



//Exportation mangoose :
module.exports = mongoose;