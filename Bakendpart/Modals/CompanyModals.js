
const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    url:{
        type:String,
        required:true
    }
   
})

const Company = mongoose.model("companies",CompanySchema);
module.exports = Company