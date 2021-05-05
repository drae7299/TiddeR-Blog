const router = require('express').Router();
const { Channel, Blog, User } = require('../../models');
const withAuth = require('../../utils/auth'); 

// router.get('/', withAuth, async (req, res) => {
//     try {
//         const channelData = await Channel.findAll({
//             include: [{model: Blog}, {model: User}],
//         });
//         res.status(200).json(channelData);
//     } catch (err) {
//         res.status(500).json(err); 
//     }
// }); 

// router.get('/:id', withAuth, async (req, res) => {
//     try {
//         const channelData = await Channel.findByPk(req.params.id, {
//             include: [{model: Blog}, {model: User}],
//         });

//         if(!channelData) {
//             res.status(404).json( {message: "Sorry, this channel doesn't exist...yet!"});
//             return; 
//         }

//         res.status(200).json(channelData);
//     }   catch (err) {
//         res.status(500).json(err)
//     }
// }); 

//working in insomnia when I remove withAuth & line 38 - withAuth directs to signup page if not signed in 
router.post('/create', withAuth, async (req, res) => {
    try {
        const newChannel = await Channel.create({
        ...req.body,
        user_id: req.session.user_id,
    });
        res.status(200).json(newChannel);
    }   catch (err) {
        res.status(500).json(err); 
    }
});

// do we need to be able to update channels? 
// works in insomnia w/out withAuth 
router.put('/:id', withAuth, async (req, res) => {
    try {
        const channelData = await Channel.update(req.body, {
            where: {
                id: req.params.id,
                user_id: req.session.user_id, 
            }
        });

        if (!channelData) {
            res.status(404).json({ message: "Sorry, that channel doesn't exist...yet!"});
            return; 
        };
        res.status(200).json(channelData); 
    } catch (err) {
        res.status(500).json(err); 
    }
}); 

//works in insomnia w/out withAuth 
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const channelData = await Channel.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id, 
            },
        }); 

        if(!channelData) {
            res.status(404).json({ message: 'no channel with this ID exists.' });
            return; 
        };

        res.status(200).json(channelData);
    }   catch (err) {
        res.status(500).json(err);
    }
}); 

module.exports = router; 