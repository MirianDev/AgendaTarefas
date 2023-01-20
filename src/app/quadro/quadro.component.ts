import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.scss'],
})
export class QuadroComponent implements OnInit {

  public todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.load();
  }

  private load() {
    const data = localStorage.getItem('todos');
    if (data) {
      this.todos = JSON.parse(data);
    } else {
      this.todos = [];
    }
  }

  receberResposta(){
this.load()
  }

}
