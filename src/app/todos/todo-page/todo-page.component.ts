import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggleAll } from '../todo.actions';

@Component({
    selector: 'app-todo-page',
    templateUrl: './todo-page.component.html',
    styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

    completados: boolean = false;

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
    }

    toggleAll(): void {
        this.completados = !this.completados;
        this.store.dispatch(toggleAll({ completado: this.completados }));
    }

}
