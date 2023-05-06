const { getAll, getByAutorId, getByPostId, createP } = require('../../models/post.model');

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


router.get('/:autorId', async (req, res) => {
    const { autorId } = req.params;

    try {
        const [result] = await getByAutorId(autorId);
        if (result.length === 0) {
            return res.json({ fatal: 'No existe posts para ese autor' });
        }
        res.json(result);
    } catch (error) {
        res.status(500)
        json({ fatal: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const [result] = await createP(req.body);
        const [post] = await getByPostId(result.insertId);
        if (post.length === 0) {
            res.json(`Debe introducir los datos del autor con id = ${req.body.autorId}`)
        }
        res.json(post[0]);
    } catch (error) {
        console.log(error);
        res.json({ fatal: error.message });
    }
});


module.exports = router;