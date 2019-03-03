const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    api: "Api router hit"
  });
});

// test if can get form data from React front-end
router.post("/form", (req, res) => {
  console.log(req.body);
});

module.exports = router;
