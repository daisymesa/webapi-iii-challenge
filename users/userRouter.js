const express = 'express';

const router = express.Router();

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

// 2. validates the user id on every request that expects a user id parameter
function validateUserId(req, res, next) {
    if(req.params.id) {
        next();
      } else {
        res.status(400).json({ message: 'Invalid User ID'})
      }
};

// 3. validates the body on a request to create a new user
function validateUser(req, res, next) {
    if (!req.body) {
        res.status(400).json({ message: 'Missing user data' })
    } else if (!req.body.name) {
        res.status(400).json({ message: 'Missing required name field' })
    } else {
        next();
    }
};
// 4. validates the body on a request to create a new post
function validatePost(req, res, next) {
    if (!req.body) {
        res.status(400).json({ message: 'Missing post data' })
    } else if (!req.body.text) {
        res.status(400).json({ message: 'Missing required text field' })
    } else {
        next();
    }
};

module.exports = router;
