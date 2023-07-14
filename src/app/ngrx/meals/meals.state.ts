/*import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Meal } from "src/app/models/meal";

export interface RepasState extends EntityState<Meal>{}

export const adapter: EntityAdapter<Meal> = createEntityAdapter<Meal>({
    selectId: (meal) => meal.id
});

export const initializeState = (): RepasState => adapter.getInitialState();

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const getState = createFeatureSelector<RepasState>('meals');
export const getAllMeals = createSelector(getState, selectAll);

export const getRandomMeal = createSelector(getAllMeals, (meals: Meal[]) => meals[Math.floor((Math.random() * meals.length) + 1)]);
export const getRandomMeals = (nb: number): any => createSelector(getAllMeals, (meals: Meal[]) => {
    const returnedMeals: Meal[] = [];
    for(let i: number = 0; i < nb; i++) {
        returnedMeals.push(meals[Math.floor((Math.random() * meals.length) + 1)]);
    }
    return returnedMeals;
});*/
