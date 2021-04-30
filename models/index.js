const User = require('./User');
const Channel = require('./Channel');
const Comment = require('./Comment');

//create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});


Channel.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Comment.belongsTo(Post, {
    foreignKey: 'channel_id',
    onDelete: "cascade"
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Channel.hasMany(Comment, {
    foreignKey: 'channel_id',
    onDelete: "cascade"
})



module.exports = { User, Channel, Comment };