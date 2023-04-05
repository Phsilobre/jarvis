import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Chore } from "src/app/models/chore";



export interface ChoresState extends EntityState<Chore>{}

export const adapter: EntityAdapter<Chore> = createEntityAdapter<Chore>({
    selectId: (chore) => chore.id
});

export const initializeState = (): ChoresState => adapter.getInitialState();

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const getState = createFeatureSelector<ChoresState>('chores');
export const getAllChores = createSelector(getState, selectAll);
