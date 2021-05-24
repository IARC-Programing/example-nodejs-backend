var express = require("express");
var router = express.Router();
const _ = require("lodash");

const companyData = require("../companyData.json");

router.get("/:id", (req, res) => {
  const companyId = req.params.id;

  const selectedCompany = _.find(
    companyData.company,
    (eachCompany) => eachCompany.id === parseInt(companyId)
  );
  res.json(selectedCompany);
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(companyData.company);
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

module.exports = router;
