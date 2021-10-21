import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from '../actions/actions';

export interface State {
    numero: number;
}

export const initialState: State = {
    numero: 0
};

const numeroReducer = createReducer(
    initialState,
    on(Actions.salvarNumero, (state, { numero }) => ({ numero: numero }))
);

export function reducer(state: State | undefined, action: Action) {
    return numeroReducer(state, action);
}