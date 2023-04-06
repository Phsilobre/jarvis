export class Chore {
    constructor(public id: number, public name: string, public frequency: number, public category: ChoreCategory, public lastDone: Date) {}
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

export const ALL_CHORES_CATEGORIES = [
	ChoreCategory.KITCHEN,
	ChoreCategory.LIVINGROOM,
	ChoreCategory.BEDROOM,
	ChoreCategory.TOILETS,
	ChoreCategory.OUTSIDE,
	ChoreCategory.GENERAL
];
