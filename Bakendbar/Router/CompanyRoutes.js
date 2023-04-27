const express = require('express')

const router = express.Router();

 const {addData,getData,searchGetData} = require("../Controler/CompaniesControler")

router.post('/', async (req, res) => {
    try {
        const companies = await addData(req.body);

        return res.send({
            data:companies
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
        const companies = await getData();

        return res.send({
            data:companies
        })
    } catch(err) {
        console.error(err.message)

        return res.status(400).send({
            message: 'unexpected error'
        })
    }
})

router.get('/sea', async (req, res) => {
    try {
        const companies = await searchGetData(req.query.search);
        
        return res.send({
            data:companies
        })
    } catch(err) {
        console.error(err.message)

        return res.status(400).send({
            message: 'unexpected error'
        })
    }
})

module.exports = router