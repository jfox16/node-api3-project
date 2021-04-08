const express = require('express');
const User = require('../users/users-model');
const Post = require('../posts/posts-model');
const { validateUserId, validateUser, validatePost } = require('../middleware/middleware');

const router = express.Router();

// apply middleware
router.use('/:id', validateUserId);
router.post('/', validateUser);
router.put('/', validateUser);
router.post('/:id/posts', validatePost);

console.log('passed');router.get('/', (req, res) => {
  console.log('passed');
});

router.get('/:id', (req, res) => {
  console.log('passed');
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id

});

router.post('/', (req, res) => {
  console.log('passed');
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
});

router.put('/:id', (req, res) => {
  console.log('passed');
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.delete('/:id', (req, res) => {
  console.log('passed');
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
});

router.get('/:id/posts', (req, res) => {
  console.log('passed');
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
});

router.post('/:id/posts', (req, res) => {
  console.log('passed');
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

// do not forget to export the router
module.exports = router;
