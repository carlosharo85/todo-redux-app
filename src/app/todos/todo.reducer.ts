import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { borrar, crear, editar, limpiarCompletados, toggle, toggleAll } from './todo.actions';

export const estadoInicial: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Ironman'),
    new Todo('Robar escudo del Capitan America')
];

export const todoReducer = createReducer(
    estadoInicial,
    on(crear, (state, { texto }) => [ ...state, new Todo(texto) ] ),
    on(toggle, (state, { id }) => {
        return state.map( elem => {
            if (elem.id === id) {
                return {
                    ...elem,
                    completado: !elem.completado
                }
            } else {
                return elem;
            }
        });
    }),
    on(editar, (state, { id, texto }) => {
        return state.map( elem => {
            if (elem.id === id) {
                return {
                    ...elem,
                    texto: texto
                }
            } else {
                return elem;
            }
        });
    }),
    on(borrar, (state, { id }) => state.filter(elem => elem.id !== id )),
    on(toggleAll, (state, { completado }) => {
        return state.map( elem => {
            return {
                ...elem,
                completado: completado
            }
        });
    }),
    on(limpiarCompletados, (state) => state.filter(elem => !elem.completado))
);