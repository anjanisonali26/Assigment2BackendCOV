const router = require('express').Router();
const todoController = require('../controllers/todoController');
const todoAuthorization = require('../middlewares/todoAuthorization');


router.get('/', todoController.list);
router.post('/', todoController.post);
router.get('/:id', todoAuthorization, todoController.get);
router.put('/:id', todoAuthorization, todoController.put);
router.delete('/:id', todoAuthorization, todoController.delete);

module.exports = router;