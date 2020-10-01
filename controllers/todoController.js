const Todo = require('../models/Todo');

class todoController {
  static list(req, res, next) {
    Todo.find({ _userId: req._userId }).then((todos) => {
      res.status(200).json({ success: true, data: todos });
    });
  }

  static post(req, res, next) {
    const { title, description } = req.body;
    const todo = new Todo({
      _userId: req._userId,
      title,
      description,
    });
    todo
      .save()
      .then((todo) => {
        res.status(201).json({ success: true, data: todo });
      })
      .catch(next);
  }

  static get(req, res, next) {
    Todo.findOne({ _id: req.params.id })
      .then((todo) => {
        res.status(200).json({ succes: true, data: todo });
      })
      .catch(next);
  }

  static put(req, res, next) {
    const { title, description } = req.body;
    Todo.findOne({ _id: req.params.id })
      .then((todo) => {
        todo.title = title;
        todo.description = description;
        return todo.save();
      })
      .then((todo) => {
        res.status(200).json({ succes: true, data: todo });
      })
      .catch(next);
  }

  static delete(req, res, next) {
    Todo.findOne({ _id: req.params.id })
      .then((todo) => {
        return todo.remove();
      })
      .then((todo) => {
        res.status(200).json({ success: true, data: { deleted: todo } });
      })
      .catch(next);
  }
}

module.exports = todoController;
