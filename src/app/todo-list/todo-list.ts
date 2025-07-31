import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../interfaces/task';
@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {
@Input() todos: Task[] = [];
@Output() deleteTodo = new EventEmitter<number>();
@Output() toggleComplete = new EventEmitter<number>();

  markDone(id: number) {
    this.toggleComplete.emit(id);
  }

  delete(id: number) {
    this.deleteTodo.emit(id);
  }

}
