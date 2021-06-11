const express = require("express");
const { signup, signin, signout } = require("../../controller/admin/auth");
const {
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} = require("../../validators/auth");
//const { requireSignin } = require("../../common-middleware");
const router = express.Router();

// signup route
router.post("/admin/signup", validateSignupRequest, isRequestValidated, signup);
//signin route
router.post("/admin/signin", validateSigninRequest, isRequestValidated, signin);
//signout route
router.post("/admin/signout", signout);
module.exports = router;
