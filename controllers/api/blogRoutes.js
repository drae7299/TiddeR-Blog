const router = require('express').Router();
const { Blog, User, Channel, Comment} = require('../../models');
const withAuth = require('../../utils/auth'); 

//get route for all blogs is captures on homeRoutes for the homepage - do we need it here? 
// works in insomnia 
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

//do we need a get route for viewing 1 blog? if so, will we need a handlebars page for viewing just one blog/move this to homeRoutes?
// works in insomnia w/out withAuth
router.get('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [{ model: User }, { model: Channel }, { model:Comment }],
            user_id: req.session.user_id, 
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

// works in insomnia w/out withAuth
router.post('/create', withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.create({
        ...req.body,
        user_id: req.session.user_id, 
    });
        res.status(200).json(newBlog);
    }   catch (err) {
        res.status(400).json(err); 
        console.log(err)
    }
}); 

//should we allow users to update blog posts?? 
// works in insomnia w/out withAuth
router.put('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.update(req.body, {
            where: {
                id: req.params.id,
                user_id: req.session.user_id, 
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

// works w/out withAuth 
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id, 
            },
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