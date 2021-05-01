const router = require('express').Router();
const { Blog, User, Channel, Comment} = require('../../models');

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [{ model: User }, { model: Channel }, { model:Comment }],
        });
        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err); 
    }
}); 

router.get('/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [{ model: User }, { model: Channel }, { model:Comment }],
        });

        if (!blogData) {
            res.status(404).json({ message: 'blog id not found'});
            return; 
        }
        res.status(200).json(blogData); 
    }   catch (err) {
        res.status(500).json(err); 
    }
}); 

router.post('/', async (req, res) => {
    try {
        const blogData = await Blog.create(req.body);
        res.status(200).json(blogData);
    }   catch (err) {
        res.status(400).json(err); 
    }
}); 

router.put(':/id', async (req, res) => {
    try {
        const blogData = await Blog.update(req.body, {
            where: {
                id: req.params.id
            }
        }); 

        if(!blogData) {
            res.status(404).json({ message: 'sorry! this blog post does not exist.' });
            return; 
        };
        res.status(200).json(blogData); 
    }   catch (err) {
        res.status(500).json(err); 
    }
}); 

router.delete('/:id', async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id
            }
        }); 

        if(!blogData) {
            res.status(404).json({ message: 'no blog post with this ID exists.' });
            return; 
        };

        res.status(200).json(blogData);
    }   catch (err) {
        res.status(500).json(err);
    }
}); 

module.exports = router; 