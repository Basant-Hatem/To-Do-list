import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoForm } from '../todo-form/todo-form';
import { TodoList } from '../todo-list/todo-list';
import { Task } from '../interfaces/task';
@Component({
  selector: 'app-todo-wrapper',
  imports: [TodoForm,TodoList,CommonModule],
  templateUrl: './todo-wrapper.html',
  styleUrl: './todo-wrapper.css'
})
export class TodoWrapper {
todos: Task[] = [];
  private nextId = 1;

addTodo(task: Task) {
  task.id = this.nextId++; 
  this.todos.push(task);
}

  deleteTodo(id: number) {
    this.todos = this.todos.filter(task => task.id !== id);
  }

  toggleComplete(id: number) {
    const task = this.todos.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }

}
