'use strict'

class TodoService {
  // There should be ways to state the contract of todoRepo
  constructor({ todoRepo }) {
    this.todoRepo = todoRepo
  }

  async getAllTodos(user) {
    const data = this.todoRepo.getAllTodos(user)
    return data
  }

  async getTodo(id, user) {
    const data = this.todoRepo.getTodo(id, user)
    return data
  }

  async addTodo(todo, user) {
    const data = this.todoRepo.addTodo(todo, user)
    return data
  }

  async removeTodo(id, user) {
    const data = this.todoRepo.removeTodo(id, user)
    return data
  }
}

module.exports = TodoService