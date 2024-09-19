const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// TestSchema routes
const { createTestSchema, updateTestSchema, deleteTestSchema, getTestSchema, getAllTestSchema } = require('../controllers/testschema');
// 
router.post("/testschema/create", checkAuthorizationHeaders,authorizeUser("createTestSchema") ,createTestSchema);
router.put("/testschema/update/:id", checkAuthorizationHeaders,authorizeUser("updateTestSchema"), updateTestSchema);
router.delete("/testschema/delete/:id", checkAuthorizationHeaders, authorizeUser("deleteTestSchema"), deleteTestSchema);
router.get("/testschema/get/:id", checkAuthorizationHeaders, authorizeUser("readTestSchema"), getTestSchema);
router.get("/testschema/getAll", checkAuthorizationHeaders, authorizeUser("readTestSchema"), getAllTestSchema);

    
// Test2 routes
const { createTest2, updateTest2, deleteTest2, getTest2, getAllTest2 } = require('../controllers/test2');
// 
router.post("/test2/create", checkAuthorizationHeaders,authorizeUser("createTest2") ,createTest2);
router.put("/test2/update/:id", checkAuthorizationHeaders,authorizeUser("updateTest2"), updateTest2);
router.delete("/test2/delete/:id", checkAuthorizationHeaders, authorizeUser("deleteTest2"), deleteTest2);
router.get("/test2/get/:id", checkAuthorizationHeaders, authorizeUser("readTest2"), getTest2);
router.get("/test2/getAll", checkAuthorizationHeaders, authorizeUser("readTest2"), getAllTest2);

  
module.exports = router;
