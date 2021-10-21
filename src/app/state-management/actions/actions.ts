import { createAction, props } from '@ngrx/store';

export const salvarNumero = createAction(
  '[Numero] Salvar Numero',
  props<{ numero: number }>()
);