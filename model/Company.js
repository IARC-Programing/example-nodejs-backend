const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema({
  name: String,
  status: { type: String, defaut: 'Ready' },
  url: String,
  controlURL: String,
  created: String,
  modified: String,
  email: String,
  image: String,
  description: String,
  owner: {
    ownerName: String,
    ownerTel: [String],
  },
})

const CompanyModel = mongoose.model('company', CompanySchema)

module.exports = CompanyModel
