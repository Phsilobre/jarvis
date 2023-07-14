/*import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppRepasParameters } from "src/app/models/app-repas-parameters";

export interface AppRepasState extends EntityState<AppRepasParameters>{}

export const adapter: EntityAdapter<AppRepasParameters> = createEntityAdapter<AppRepasParameters>({
    selectId: () => 0
});

export const initializeState = (): AppRepasState => adapter.getInitialState();

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const getState = createFeatureSelector<AppRepasState>('appRepas');
export const isUpdateOneMealModeActivated = createSelector(getState, (state: AppRepasState): boolean => getAppRepas(state).updateSeveralMealsMode);
export const isUpdateAllMealsModeActivated = createSelector(getState, (state: AppRepasState): boolean => getAppRepas(state).updateAllMealsMode);

function getAppRepas(appRepasState: AppRepasState): AppRepasParameters {
    const appRepasParam: AppRepasParameters | undefined = appRepasState.entities[0];
    if(appRepasParam) {
        return appRepasParam;
    } else {
        return new AppRepasParameters();
    }
}*/