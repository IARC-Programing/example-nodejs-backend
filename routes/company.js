const express = require('express')
const router = express.Router()
const _ = require('lodash')

const CompanyModel = require('../model/Company')
const companyData = require('../companyData.json')

/* GET users listing. */
router.get('/', function (req, res, next) {
  CompanyModel.find({}).then((value) => {
    //console.log(value)
    res.json(value)
  })
})

router.get('/:id', (req, res) => {
  CompanyModel.findById(req.params.id)
    .then((value) => {
      res.status(200).json(value)
    })
    .catch((error) => {
      res.status(404).json(error)
    })
})

router.post('/', (req, res) => {
  const newlyCreateCompany = new CompanyModel(req.body)
  if (newlyCreateCompany) {
    newlyCreateCompany.save()
    res.status(201).json(newlyCreateCompany)
  } else {
    res.status(404)
  }
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  CompanyModel.findByIdAndUpdate(id, req.body)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((error) => {
      res.status(404).send(error)
    })
})

module.exports = router
