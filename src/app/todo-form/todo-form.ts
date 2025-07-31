import { Component,EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../interfaces/task';
@Component({
  selector: 'app-todo-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css'
})
export class TodoForm {
   todoText: string = '';

  @Output() todoAdded = new EventEmitter<Task>();

  submitTodo() {
    const text = this.todoText.trim();
    if (text) {
      const newTask: Task = {
        id: Date.now(),
        text: text,
        completed: false
      };
      this.todoAdded.emit(newTask);
      this.todoText = '';
    }
  }
}
