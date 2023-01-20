import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-naoConcluida',
  templateUrl: './naoConcluida.component.html',
  styleUrls: ['./naoConcluida.component.scss']
})
export class NaoConcluidaComponent implements OnChanges {
  public mode: any = 'list';
  @Input() todos: Todo[] = [];
  @Output() atualizar = new EventEmitter();
  public title: string = 'Minhas Tarefas';
  public form!: FormGroup;
  public dataDia: Date = new Date();

  public todosFiltered: Todo[] = [];
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
    this.todosFiltered = this.todos.filter(l=> l.done ==  false)
  }

  add() {
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.save();
    this.clear();
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
  markAsDone(todo: Todo) {
    todo.done = true;
    this.save();
  }


  save() {
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
    this.mode = 'list';

    this.atualizar.emit(true);
  }

  changeMode(mode: string) {
    this.mode = mode;
  }



}


