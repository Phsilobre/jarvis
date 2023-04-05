import { createAction, props } from "@ngrx/store";
import { Chore } from "src/app/models/chore";

const corvees: string = '[Corvées] ';

export const Clear = createAction(corvees + 'Get all');
export const CreateAll = createAction(corvees + 'Create all', props<{payload: Chore[]}>());
