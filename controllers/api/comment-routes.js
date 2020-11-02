const router = require('express').Router();
const { Comment } = require('../../models');

const { User, Post } = require('../../models');


// POST /api/comments
router.post('/', (req, res) => {
    // pass session id along with all destructured properties on req.body
    Comment.create({
        comment_content: req.body.comment_content,
        post_id: req.body.post_id,
        user_id: req.body.user_id || req.session.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET (all comments) /api/comments
router.get('/', (req, res) => {
    Comment.findAll({
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Post,
                attributes: ['title']
            }
        ]
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/comments
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;