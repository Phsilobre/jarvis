import { Injectable, OnDestroy } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Subscription } from "rxjs";
import { Chore } from "src/app/models/chore";
import { ChoresAction } from "./chores.action";
import { ChoreService } from "src/app/chores/services/chore.service";
import { patch, updateItem } from "@ngxs/store/operators";


export interface ChoresStateModel {
    chores: Chore[];
}

const initialChoreState: ChoresStateModel = {
    chores: []
}

@State<ChoresStateModel>({
    name: 'chores',
    defaults: initialChoreState
})
@Injectable()
export class ChoresState implements OnDestroy {
    private readonly sub = new Subscription();

    @Selector()
    static getChoresState(state: ChoresStateModel): ChoresStateModel {
        return state;
    }

    @Selector()
    static getAllChores(state: ChoresStateModel): Chore[] {
        return state.chores;
    }

    @Action(ChoresAction.LoadAll)
    loadAll({ patchState }: StateContext<ChoresStateModel>): void {
        this.choreService.getAllChores().subscribe((chores: Chore[]): void => {
            chores.forEach((chore: Chore) => {
              if(chore.lastDone) {
                chore.lastDone = new Date(chore.lastDone);
              } else {
                chore.lastDone = new Date('01/01/00');
              }
            });
            patchState({chores});
        });
    }

    @Action(ChoresAction.UpdateLastDone)
    updateLastDone({ setState, getState }: StateContext<ChoresStateModel>,
              { chore }: ChoresAction.UpdateLastDone): void {
        const updatedChore = {...chore, lastDone: new Date()};
        setState(
            patch<ChoresStateModel>({
                chores: updateItem<Chore>((currentChore: Chore) => this.isSameChore(chore, currentChore), updatedChore)
            })
        );
        this.choreService.updateChore(updatedChore).subscribe();
    }

    @Action(ChoresAction.UpdateOne)
    updateOne({ setState }: StateContext<ChoresStateModel>,
              { chore }: ChoresAction.UpdateOne): void {
        setState(
            patch<ChoresStateModel>({
                chores: updateItem<Chore>((currentChore: Chore) => this.isSameChore(chore, currentChore), chore)
            })
        );
        this.choreService.updateChore(chore).subscribe();
    }
    

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    isSameChore(ch1: Chore, ch2: Chore): boolean {
        return ch1._id === ch2._id;
    }

    constructor(private readonly choreService: ChoreService) {}
}
