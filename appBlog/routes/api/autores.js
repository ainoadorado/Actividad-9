const { getAll, getById, createA } = require('../../models/autor.model');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const [result] = await getAll();
        res.json(result);
    } catch (error) {
        res.status(500)
            .json({ fatal: error.message });
    }
});



router.post('/', async (req, res) => {
    try {
        const [result] = await createA(req.body);
        const [autor] = await getById(result.insertId);
        res.json(autor[0]);
    } catch (error) {
        console.log(error);
        res.json({ fatal: error.message });
    }
});

module.exports = router;
