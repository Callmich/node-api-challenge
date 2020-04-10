const express = require('express');

// Put in databases needed & functions
const projectDb = require("../data/helpers/projectModel")

const router = express.Router();

//crud actions

router.get('/', (req, res)=>{
    res.status(404).json({error: "please provide a project id"})
})

router.get('/:id', (req, res)=>{
    projectDb.get(req.params.id)
    .then((project)=>{
        res.status(200).json(project)
    })
    .catch((error)=>{
        console.log("Error pulling project",error)
        res.status(500).json({error: "The project info could not be retrieved from the server."})
    })
})

router.post("/", (req, res) => {
    projectDb.insert(req.body)
    .then((newProject)=>{
        res.status(200).json(newProject)
    })
    .catch((error)=>{
        console.log("issue with Post Project",error)
        res.status(500).json({error: "There was an issue trying to create the project"})
    })
})

router.put('/:id', (req, res)=>{
    projectDb.update(req.params.id, req.body)
    .then((upProject)=>{
        res.status(200).json(upProject)
    })
    .catch((error)=>{
        console.log("error in put for project", error)
        res.status(500).json(({error: "Project could not be updated"}))
    })
})

router.delete('/:id', (req, res)=>{
    projectDb.remove(req.params.id)
    .then((delProject)=>{
        res.status(200).json(delProject)
    })
    .catch((error)=>{
        console.log("error when deleteing a project",error)
        res.status(500).json({error: "The prjoect could not be deleted"})
    })
})


module.exports = router;