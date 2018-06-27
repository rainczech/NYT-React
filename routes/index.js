const path = require ("path");
const router = require("express").Router();
const apiRoutes = require ("./api");

// API Routes
router.use("./api", apiRoutes);

// if no API routes are used, send the react app
router.use(function(req,res){
    res.senndFile(path.join(_dirname,"../nyt-react/build/index.html"));
});

module.exports = router;