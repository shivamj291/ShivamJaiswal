const express = require('express')

const router = express.Router();

 const {addData,getData} = require("../Controler/AdsControler")

router.post('/', async (req, res) => {
    try {
        const Ads = await addData(req.body);

        return res.send({
            data:Ads
        })
    } catch(err) {
        console.error(err.message)

        return res.status(400).send({
            message: 'unexpected error'
        })
    }
})
router.get('/', async (req, res) => {
    try {
        const ads = await getData();

        return res.send({
            data:ads
        })
    } catch(err) {
        console.error(err.message)

        return res.status(400).send({
            message: 'unexpected error'
        })
    }
})

module.exports = router