import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[Todo] Crear',
    props<{ texto: string }>()
);