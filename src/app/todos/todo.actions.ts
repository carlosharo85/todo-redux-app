import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[Todo] Crear',
    props<{ texto: string }>()
);
export const toggle = createAction(
    '[Todo] Toggle',
    props<{ id: number }>()
);
export const editar = createAction(
    '[Todo] Editar',
    props<{ id: number, texto: string }>()
);
export const borrar = createAction(
    '[Todo] Borrar',
    props<{ id: number }>()
);
export const toggleAll = createAction(
    '[Todo] Toogle All',
    props<{ completado: boolean }>()
);
export const limpiarCompletados = createAction('[Todo] Limpiar completados');