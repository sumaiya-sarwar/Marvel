const express = require('express');
const router = express.Router();
const { Characters } = require('../models/characters')


router.get('/', async (req, res) => {
  try {
    console.log(req.query)
    if(req.query.type) {
     res.json(await Characters.find({character_type: req.query.type})) 
    } else {
      res.status(200).json(await Characters.find({}));
  } } catch(err) {
      console.log(err);
  }
})

router.get('/', async (req, res) => {
    try {
        res.status(200).json(await Characters.find({}));
    } catch(err) {
        console.log(err);
    }
})

router.post('/', async (req, res) => {
    try {
        res.status(201).json(await Characters.create(req.body));
    } catch (err) {
        console.log(err);
    }
})

// SHOW ROUTE
router.get("/:id", async (req, res) => {
    try {
        // get by ID
        res.json(await Characters.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
});

//  UPDATE ROUTE
router.put("/:id", async (req, res) => {
  try {
    // update people by ID
    res.json(
      await Characters.findByIdAndUpdate(req.params.id, req.body, {new:true})
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// DELETE ROUTE
router.delete("/:id", async (req, res) => {
  try {
    // delete by ID
    res.json(await Characters.findByIdAndRemove(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

module.exports = router;