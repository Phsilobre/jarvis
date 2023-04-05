import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { AppRepasParameters } from "src/app/models/app-repas-parameters";
import * as AppRepasActions from './app-repas.action';
import { adapter, AppRepasState, initializeState } from "./app-repas.state";

export const initialState = initializeState();

const reducer = createReducer(
    initialState,
    on(AppRepasActions.Init, (state): AppRepasState => adapter.addOne(new AppRepasParameters(), state)),
    on(AppRepasActions.ActivateUpdateOneMealMode, (state): AppRepasState => adapter.updateOne({id: AppRepasParameters.ID, changes: {updateSeveralMealsMode: true}}, state)),
    on(AppRepasActions.DeactivateUpdateSeveralMealsMode, (state): AppRepasState => adapter.updateOne({id: AppRepasParameters.ID, changes: {updateSeveralMealsMode: false}}, state)),
    on(AppRepasActions.ActivateUpdateAllMealsMode, (state): AppRepasState => adapter.updateOne({id: AppRepasParameters.ID, changes: {updateAllMealsMode: true}}, state)),
    on(AppRepasActions.DeactivateUpdateAllMealsMode, (state): AppRepasState => adapter.updateOne({id: AppRepasParameters.ID, changes: {updateAllMealsMode: false}}, state)),
)

export function AppRepasReducer(state: AppRepasState | undefined, action: Action): any {
    return reducer(state, action);
}