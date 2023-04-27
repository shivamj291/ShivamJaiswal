const Company = require("../Modals/CompanyModals")
const {AdsgetData} = require("../Controler/AdsControler")
async function addData(Companiesdata){
    const Data = await Company.create({
        ...Companiesdata,
    })
    return Data;
}
async function getData(){

    const company = await Company.find({})
   
    return company;
}
async function searchGetData(keyword){
    console.log(keyword)
    const company = await Company.find({name:keyword})
  
     let abc
    if(company.length>0){
       
      abc = await AdsgetData( `${company[0]._id}`);
      if(abc.length===0){
        abc=company
      }
    }else{
       
        abc = await AdsgetData(keyword);
    }
    console.log(abc,"shi")
    return abc;
}
module.exports = {
    addData,
    getData,
    searchGetData
}