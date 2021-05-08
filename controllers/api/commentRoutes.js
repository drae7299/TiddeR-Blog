const router = require('express').Router();
const { Comment, Blog, User, Channel } = require('../../models');
const withAuth = require('../../utils/auth');

// router.get('/', async (req, res) => {
//     try {
//         const commentData = await Blog.findAll({
//             include: [{ model: User }, { model: Channel }, { model: Blog }],
//         });
//         res.status(200).json(commentData);
//     } catch (err) {
//         res.status(500).json(err); 
//     }
// }); 

// router.get('/:id', async (req, res) => {
//     try {
//         const commentData = await Comment.findByPk(req.params.id, {
//             include: [{ model: User }, { model: Channel }, { model: Blog }],
//         });

//         if (!commentData) {
//             res.status(404).json({ message: 'comment id not found'});
//             return; 
//         }
//         res.status(200).json(commentData); 
//     }   catch (err) {
//         res.status(500).json(err); 
//     }
// }); 

//works without withAuth
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: 3,
        });
        console.log(newComment); 
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
        console.log(err); 
    }
});

//works without withAuth
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            }
        });

        if (!commentData) {
            res.status(404).json({ message: 'no comment does not exist or has already been deleted.' });
            return;
        };

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;