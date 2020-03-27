const express = require('express');
const router = express.Router();
const List = require('./../models/list');

router.get('/:id', async (req, res) => {
    try {
        const list = await List.findById(req.params.id);
        res.render('games/index', { list: list });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

 module.exports = router;
