const Ads = require("../Modals/AdsModals")

async function addData(Adsdata){
    const Data = await Ads.create({
        ...Adsdata,
    })
    return Data;
}
async function getData(){

  const ads = await Ads.find({})
 
  return ads;
}

async function AdsgetData(keyword){
      
    
       const ads = await Ads.aggregate([
        {
          $match: {
             $or: [
              { companyId: { $regex: keyword, $options: 'i' } },
              { primaryText: { $regex: keyword, $options: 'i' } },
              { headline: { $regex: keyword, $options: 'i' } },
              { description: { $regex: keyword, $options: 'i' } }
            ]
          }
        },
        {
          $group: {
            _id: '$companyId',
             ads: { $push: '$$ROOT' }
          }
        },
        {
          $unwind: '$ads'
        },
        {
          $replaceRoot: { newRoot: '$ads' }
        }
      ]);
      return ads
}
module.exports = {
    addData,
    AdsgetData,
    getData
}

