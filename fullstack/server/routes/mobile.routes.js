const mobileController = require("../controllers/mobile.controller");

module.exports = (app) => {
  app.get("/api/mobiles", mobileController.getMobiles);
  app.get("/api/mobiles/:id", mobileController.getMobileById);
  app.post("/api/mobiles", mobileController.createMobile);
  app.put("/api/mobiles/:id", mobileController.updateMobile);
  app.delete("/api/mobiles/:id", mobileController.deleteMobile);
};
