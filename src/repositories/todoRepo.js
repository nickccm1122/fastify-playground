'use strict'

class TodoRepo {
  /**
   * TodoRepo can inject any kind of clients to access the data store
   */
  constructor() {
    this.todos = []
  }

  async getAllTodos(user) {
    return this.todos
  }

  async getTodo(id, user) {
    const found = this.todos.find(todo => todo.id === id)
    return found || null
  }

  async addTodo(item, user) {
    return this.todos.push(item)
  }

  async removeTodo(id, user) {
    return this.todos
  }
}

module.exports = TodoRepo
