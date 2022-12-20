import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { FiltrosValidos, setFiltro } from 'src/app/filtro/filtro.actions';
import { limpiarCompletados } from '../todo.actions';

@Component({
    selector: 'app-todo-footer',
    templateUrl: './todo-footer.component.html',
    styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

    filtroActual = FiltrosValidos.todos;
    arrayFiltros: FiltrosValidos[] = [
        FiltrosValidos.todos,
        FiltrosValidos.pendientes,
        FiltrosValidos.completados
    ];
    contPendientes: number = 0;

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
        /*this.store.select('filtro').subscribe( filtro => {
            this.filtroActual = filtro;
        });*/
        this.store.subscribe( state => {
            this.filtroActual = state.filtro;
            this.contPendientes = state.todos.filter( elem => !elem.completado).length;
        });
    }

    cambiarFiltro(nuevoFiltro: FiltrosValidos): void {
        if (this.filtroActual === nuevoFiltro) { return; }

        this.filtroActual = nuevoFiltro;
        this.store.dispatch(setFiltro({ filtro: nuevoFiltro }));
    }

    limpiarCompletados(): void {
        this.store.dispatch(limpiarCompletados());
    }

}
