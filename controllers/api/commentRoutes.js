const router = require('express').Router();
const { Comment, Blog, User, Channel} = require('../../models');

router.get('/', async (req, res) => {
    try {
        const commentData = await Blog.findAll({
            include: [{ model: User }, { model: Channel }, { model: Blog }],
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err); 
    }
}); 

router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id, {
            include: [{ model: User }, { model: Channel }, { model: Blog }],
        });

        if (!commentData) {
            res.status(404).json({ message: 'comment id not found'});
            return; 
        }
        res.status(200).json(commentData); 
    }   catch (err) {
        res.status(500).json(err); 
    }
}); 

router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create(req.body);
        res.status(200).json(commentData);
    }   catch (err) {
        res.status(400).json(err); 
    }
}); 

router.delete('/:id', async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id
            }
        }); 

        if(!commentData) {
            res.status(404).json({ message: 'no comment with this ID exists.' });
            return; 
        };

        res.status(200).json(commentData);
    }   catch (err) {
        res.status(500).json(err);
    }
}); 

module.exports = router; 