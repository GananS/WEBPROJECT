let express = require('express');
let router = express.Router();
let indexController = require('../controller/index');
/* GET home page. */
router.get('/', indexController.displayHomePage)

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects',indexController.displayProjectPage);

/* GET Contact Me page. */
router.get('/contact', indexController.displayContactPage);

module.exports = router;

/*
MVC --> Model View Controller
model --> to connect our logic
view --> pages
controller --> the logic behind our routes
*/