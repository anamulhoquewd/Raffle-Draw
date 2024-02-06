const myDB = require("../db/db");
const router = require("express").Router();

router.get("/t/:ticketId", (req, res) => {
  res.status(200).json({
    ticket: myDB.findById(req.params.ticketId),
    message: "Successfuly!",
  });
});

router.patch("/t/:ticketId", (req, res) => {
  const data = myDB.updateById(req.params.ticketId, req.body);
  res.status(200).json({
    message: "Ubdated successfuly!",
    "ubdated data": data,
  });
});

router.delete("/t/:ticketId", (req, res) => {
  const data = myDB.deleteById(req.params.ticketId);
  res.status(200).json({ message: "Ticket was deleted successfuly!", data });
});

router.get("/u/:username", (req, res) => {
  const data = myDB.findByUsername(req.params.username);
  res.status(200).json({
    message: "Success",
    tickets: data,
  });
});

router.patch("/u/:username", (req, res) => {
  const data = myDB.updateByUsernam(req.params.username, req.body);
  res.status(200).json({
    message: "Ubdated successfuly!",
    "ubdated data": data,
  });
  console.log(data);
});

router.delete("/u/:username", (req, res) => {
  const data = myDB.deleteByUsername(req.params.username);
  res.status(200).json({ message: "Tickets deleted successfuly!", data });
});

router.post("/sell", (req, res) => {
  const data = myDB.create(req.body.username, req.body.price);
  res.status(200).json({ message: "Success!", data });
});

router.post("/bulk", (req, res) => {
  const data = myDB.bulkTicekts(
    req.body.username,
    req.body.price,
    req.body.quantity
  );
  res.status(200).json({ message: "Success", data });
});

router.get("/", (_req, res) => {
  const data = myDB.find();
  res.status(200).json({ tickets: data });
});

router.get("/draw", (_req, res) => {
  const data = myDB.draw(2);
  res.status(200).json({ message: "Success", winners: data });
});

module.exports = router;
