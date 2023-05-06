const { getAll, getByAutorId, getByPostId } = require('../../models/post.model');

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


router.get('/:clientId', async (req, res) => {
    const { clientId } = req.params;

    try {
        const [result] = await getByAutorId(clientId);
        if (result.length === 0) {
            return res.json({ fatal: 'No existe posts para ese autor' });
        }
        res.json(result[0]);
    } catch (error) {
        res.status(500)
        json({ fatal: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body);
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