/*import { Action, createReducer, on } from "@ngrx/store";
import * as RepasActions from './meals.action';
import { adapter, initializeState, RepasState } from "./meals.state";

export const initialState = initializeState();

const reducer = createReducer(
    initialState,
    on(RepasActions.Clear, (state): RepasState => adapter.removeAll(state)),
    on(RepasActions.AddOne, (state, {payload}): RepasState => adapter.addOne(payload, state)),
    on(RepasActions.AddMany, (state, {payload}): RepasState => adapter.addMany(payload, state)),
)

export function RepasReducer(state: RepasState | undefined, action: Action): any {
    return reducer(state, action);
}*/