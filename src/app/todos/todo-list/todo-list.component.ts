import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { FiltrosValidos } from 'src/app/filtro/filtro.actions';
import { Todo } from '../models/todo.model';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

    arrayTodos: Todo[] = [];
    filtroActual: FiltrosValidos = FiltrosValidos.todos;

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
        /*this.store.select('todos').subscribe(todos => {
            this.arrayTodos = todos;
        });*/
        this.store.subscribe(state => {
            this.arrayTodos = state.todos;
            this.filtroActual = state.filtro;
        });
    }

}
