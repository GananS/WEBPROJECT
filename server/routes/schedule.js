let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect with schedule model

let Schedule = require('../models/schedule');
let scheduleController = require('../controller/schedule')
/* CRUD Operation */


/* Read Operation */
/* Get route for the schedule list */

router.get('/',scheduleController.displayScheduleList);


/* Add Operation */
/* Get route for displaying the Add-Page -- Create Operation */
router.get('/add',scheduleController.displayAddPage);

/* Post route for processing the Add-Page -- Create Operation */
router.post('/add',scheduleController.processAddPage);

/* Edit Operation */
/* Get route for displaying the Edit Operation -- Update Operation */
router.get('/edit/:id',scheduleController.displayEditPage);

/* Post route for displaying  the Edit Operation -- Update Operation */
router.post('/edit/:id',scheduleController.processEditPage);

/* Delete Operation */
/* Get to perform Delete Operation -- Deletion */
router.get('/delete/:id',scheduleController.performDelete);


module.exports=router;