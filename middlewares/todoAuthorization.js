const Todo = require('../models/Todo');

module.exports = (req, res, next) => {
  Todo.findOne({ _id: req.params.id })
    .then((todo) => {
      if (todo) {
        if (todo._userId.toString() === req._userId) next();
        else throw { name: 'FORBIDDEN' };
      } else throw { name: 'NOT_FOUND' };
    })
    .catch(next);
};
