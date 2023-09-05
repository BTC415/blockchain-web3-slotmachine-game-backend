module.exports = app => {
    const spin = require("../controllers/spin.controller.js");
  
    var router = require("express").Router();
  
    // deposit
    router.post("/deposit", spin.deposit);
    
    //getBalence
    router.post("/getBalence", spin.getBalence);
    //withdraw
    router.post("/withdraw", spin.withdraw);
    //win
    router.post("/win", spin.win)
    //betStart
    router.post("/betStart", spin.betStart)
    //bonusBuy
    router.post("/bonusBuy", spin.bonusBuy)

    app.use("/api/spin", router);
  };
  