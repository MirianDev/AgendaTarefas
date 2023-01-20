import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-concluida',
  templateUrl: './concluida.component.html',
  styleUrls: ['./concluida.component.scss'],
})
export class ConcluidaComponent implements OnChanges {
  @Input() todos: Todo[] = [];
  @Output() atualizar = new EventEmitter();

public todosFiltered: Todo[] = [];

  public form!: FormGroup;
  public dataDia: Date = new Date();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.todosFiltered = this.todos.filter(l=> l.done ==  true);
  }
 

  clear() {
    this.form.reset();
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.save();
    }
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
    this.save();
  }

  save() {
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);

    this.atualizar.emit(true);
  }
}




