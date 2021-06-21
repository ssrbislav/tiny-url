const express = require('express')
const Url = require('../models/url')
const { nanoid } = require('nanoid')
require('dotenv/config')

const router = express.Router()

router.get('/:code', async (req, res) => {
    try {
        const url = await Url.findOne({code: req.params.code})
        
        if (url) {
            return res.redirect(url.longUrl)
        } else {
            return res.status(400).json("No such URL")
        }
    } catch (error) {
        console.error(error)
        res.status(500)
    }
})

router.post('/generate_url', async (req, res) => {
    const code = nanoid(8) 

    const { longUrl } = req.body
    const shortUrl = `${process.env.domain}/${code}`

    try {
        const newUrl = new Url({
            longUrl,
            code,
            shortUrl,
            dateOfCreation: new Date()
        } )

        await newUrl.save()
        res.status(200).json(newUrl)

    } catch (error) {
        console.error(error)
        res.status(500).json("Server error")
    }
})

module.exports = router