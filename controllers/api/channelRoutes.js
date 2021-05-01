const router = require('express').Router();
const { Channel, Blog, User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const channelData = await Channel.findAll({
            include: [{model: Blog}, {model: User}],
        });
        res.status(200).json(channelData);
    } catch (err) {
        res.status(500).json(err); 
    }
}); 

router.get('/:id', async (req, res) => {
    try {
        const channelData = await Channel.findByPk(req.params.id, {
            include: [{model: Blog}, {model: User}],
        });

        if(!channelData) {
            res.status(404).json( {message: "Sorry, this channel doesn't exist...yet!"});
            return; 
        }

        res.status(200).json(channelData);
    }   catch (err) {
        res.status(500).json(err)
    }
}); 

router.post('/', async (req, res) => {
    try {
        const channelData = await Channel.create(req.body);
        res.status(200).json(channelData);
    }   catch (err) {
        res.status(400).json(err); 
    }
});

router.put('/:id', async (req, res) => {
    try {
        const channelData = await Channel.update(req.body, {
            where: {
                id: req.params.id
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

router.delete('/:id', async (req, res) => {
    try {
        const channelData = await Channel.destroy({
            where: {
                id: req.params.id
            }
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