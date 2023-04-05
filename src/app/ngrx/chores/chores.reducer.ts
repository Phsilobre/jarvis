import { Action, createReducer, on } from "@ngrx/store";
import { adapter, ChoresState, initializeState } from "./chores.state";
import * as ChoresActions from './chores.action';

export const initialState = initializeState();

const reducer = createReducer(
    initialState,
    on(ChoresActions.Clear, (state): ChoresState => adapter.removeAll(state)),
    on(ChoresActions.CreateAll, (state, {payload}): ChoresState => adapter.addMany(payload, state)),
)

export function ChoresReducer(state: ChoresState | undefined, action: Action): any {
    return reducer(state, action);
}