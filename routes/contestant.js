const express=require("express");
const router=express.Router();
const {createContestant, increVotes, getContestantById,getContestantIdByName,getAllContestants}=require("../controllers/contestant")
const {isSignedIn,isAuthenticated,isAdmin}=require("../controllers/auth");
const { getUserById } = require("../controllers/user");

router.param("contestantId",getContestantById)
router.param("userId",getUserById)

router.post("/user/:userId/contestant/create",isSignedIn,isAuthenticated,isAdmin,createContestant)

router.get("/user/:userId/contestant/incre/:contestantId",isSignedIn,isAuthenticated,increVotes)
router.post("/user/:userId/nominations/contestant",isSignedIn,isAuthenticated,getContestantIdByName)
router.get("/all/contestants",getAllContestants)


module.exports=router;
