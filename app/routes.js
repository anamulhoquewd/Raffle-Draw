// const router = require("express").Router();
const router = require("../routers/ticketRouter");

router.get("/health", (_req, res) => {
  res.status(200).json({ Message: "Hello world!" });
});

module.exports = router;
