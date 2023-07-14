import { Chore } from "src/app/models/chore";

const corvees: string = '[Corvées] ';

const ActionTypes = {
    LOAD_ALL: '[CHORE] Load All',
    UPDATE_ONE: '[CHORE] Update one',
    UPDATE_LAST_DONE: '[CHORE] Update last done'
}

export namespace ChoresAction {
    export class LoadAll {
        static readonly type = ActionTypes.LOAD_ALL;
    } 
    
    export class UpdateOne {
        static readonly type = ActionTypes.UPDATE_ONE;
        constructor(readonly chore: Chore) {}
    }

    export class UpdateLastDone {
        static readonly type = ActionTypes.UPDATE_LAST_DONE;
        constructor(readonly chore: Chore) {}
    }
}

