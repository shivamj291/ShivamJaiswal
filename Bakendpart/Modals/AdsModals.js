const mongoose = require('mongoose');

const AdsSchema = new mongoose.Schema({
   primaryText:{
    type:String,
    required: true
   },
   headline:{
      type:String,
      required: true
   },
   description:{
    type:String,
   },
   CTA:{
      type:String,
      required:true
   },
   imageUrl:{
      type:String,
      required:true
   },
   companyId:{
      type:String,
      required:true
   }
})

const Ads = mongoose.model("Ads",AdsSchema);

module.exports = Ads