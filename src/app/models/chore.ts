export class Chore {
    constructor(public id: number, public name: string, public frequency: number, public category: string, public lastDone: Date) {}
}

export enum ChoreCategory {
    KITCHEN,
	LIVINGROOM,
	BEDROOM,
	BATHROOM,
	TOILETS,
	OUTSIDE,
	GENERAL
}