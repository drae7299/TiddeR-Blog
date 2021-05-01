const User = require('./User');
const Channel = require('./Channel');
const Comment = require('./Comment');
const Blog = require('./Blog')

//create associations
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
});

User.hasMany(Channel, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
});

Blog.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Channel.belongsTo(User, {
    foreignKey: 'user_id',
});

Channel.hasMany(Blog, {
    foreignKey: 'channel_id',
    onDelete: "CASCADE"
}); 

Blog.belongsTo(Channel, {
    foreignKey: 'channel_id',
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: "CASCADE"
}); 

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
    onDelete: "cascade"
});




module.exports = { User, Channel, Comment, Blog };