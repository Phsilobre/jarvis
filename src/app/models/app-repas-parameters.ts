export class AppRepasParameters {

    static readonly ID: string = '0';
    static readonly EVENT_CHANGE_MEAL: string = '@CHANGEMEAL@';
    static readonly EVENT_DETAIL_MEAL: string = '@DETAILMEAL@';
    static readonly EVENT_CHANGE_MEAL_ME: string = '@DETAILMEALME@';
    static readonly EVENT_CHANGE_MEAL_RDM: string = '@DETAILMEALRDM@';

    constructor(public updateSeveralMealsMode: boolean = false, public updateAllMealsMode: boolean = false) {}
}
