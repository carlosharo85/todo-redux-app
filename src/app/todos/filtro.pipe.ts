import { Pipe, PipeTransform } from '@angular/core';
import { FiltrosValidos } from '../filtro/filtro.actions';
import { Todo } from './models/todo.model';

@Pipe({
    name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

    transform(todos: Todo[], filtro: FiltrosValidos): Todo[] {
        switch(filtro) {
            case FiltrosValidos.completados:
                return todos.filter(elem => elem.completado);
            case FiltrosValidos.pendientes:
                return todos.filter(elem => !elem.completado);
            default:
                return todos;
        }
    }

}
