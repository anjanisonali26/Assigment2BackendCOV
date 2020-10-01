const router = require('express').Router();
const userRoutes = require('./user');
const todoRoutes = require('./todo');
const errorHandler = require('../middlewares/errorHandlers')


router.use('/users', userRoutes);
router.use('/todos', todoRoutes);

router.use(errorHandler);

module.exports = router;

