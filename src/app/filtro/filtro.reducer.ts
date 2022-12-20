import { createReducer, on } from '@ngrx/store';
import { FiltrosValidos, setFiltro } from './filtro.actions';

export const filtroInicial = FiltrosValidos.todos;

export const filtroReducer = createReducer(
    filtroInicial,
    on(setFiltro, (state, { filtro }) => filtro )
);