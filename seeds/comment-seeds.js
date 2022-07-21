const { Comment } = require('../models');

const commentData = [{
        comment_text: "This is important. I agree.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "This is a good point. However, I have a different opinion. ",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "No comment.",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;