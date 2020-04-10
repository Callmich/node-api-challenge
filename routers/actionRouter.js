const express = require('express');

// Put in databases needed & functions
const actionDb = require('../data/helpers/actionModel');
const projectDb = require("../data/helpers/projectModel")

const router = express.Router();

//crud actions for /api/action

router.get("/:id", (req, res)=>{
    actionDb.get(req.params.id)
    .then((action)=>{
        res.status(200).json(action)
    })
    .catch((error)=>{
        console.log("error getting specific action", error)
        res.status(500).json({error: "error retrieving action from server"})
    })
})

router.post("/", validateProjectId, (req, res)=>{
    actionDb.insert(req.body)
    .then((newAction)=>{
        res.status(200).json(newAction)
    })
    .catch((error)=>{
        console.log("error when adding an action", error)
        res.status(500).json({error: "Error saving action to server"})
    })
})

router.put('/:id', (req, res)=>{
    actionDb.update(req.params.id, req.body)
    .then((upAction)=>{
        res.status(200).json(upAction)
    })
    .catch((error)=>{
        console.log("Error updating action", error)
        res.status(500).json({error: "Error updating action to server"})
    })
})




//middleware

function validateProjectId(req, res, next){
    projectDb.get(req.body.project_id)
    .then((projectId)=>{
        if(projectId == null){
            console.log("\n middleware issue \n")
            res.status(404).json({error: "Project ID does not exist"})
        }else{
            console.log("\n middleware moving on \n")
            next()
        }
    })
}


module.exports = router;