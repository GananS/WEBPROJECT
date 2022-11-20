let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect with schedule

let Schedule = require('../models/schedule');
/* CRUD Operation */

module.exports.displayScheduleList = (req,res,next)=>{
    Schedule.find((err, schedulelist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('schedule/list',{
                title:'Schedule', 
                Schedulelist: schedulelist
            })
        }    
    });
}

module.exports.displayAddPage = (req,res,next)=> {
    res.render('schedule/add', {title:'Add Assessment'})
}

module.exports.processAddPage = (req,res,next)=> {
    let newSchedule = Schedule ({
        "assessment":req.body.assessment,
        "deadline":req.body.deadline,
        "description":req.body.description,
        "class":req.body.class
    });
    Schedule.create(newSchedule,(err,Schedule) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/schedule-list');
        }
    })
}

module.exports.displayEditPage =(req,res,next)=> {
    let id = req.params.id;
    Schedule.findById(id,(err, scheduleToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('schedule/edit',{title:'Edit schedule', schedule:scheduleToEdit});
        }
    });
}

module.exports.processEditPage =(req,res,next)=> {
    let id=req.params.id;
    let updateSchedule = Schedule({
        "assessment":req.body.assessment,
        "deadline":req.body.deadline,
        "description":req.body.description,
        "class":req.body.class
    });
    Schedule.updateOne({_id:id},updateSchedule,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/schedule-list')
        }
    });
}

module.exports.performDelete = (req,res,next)=> {
    let id =req.params.id;
    Schedule.remove({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/schedule-list')
        }
    })
}