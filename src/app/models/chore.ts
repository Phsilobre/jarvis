export class Chore {
    constructor(
		public _id: number,
		public name: string,
		public frequency: number, //Nombre de jours
		public category: ChoreCategory,
		public lastDone: Date
	) {}
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
	ChoreCategory.BATHROOM,
	ChoreCategory.TOILETS,
	ChoreCategory.OUTSIDE,
	ChoreCategory.GENERAL
];

export const ALL_CHORES_CATEGORIES_LABEL = [
	{'label' : 'Cuisine', 'category': ChoreCategory.KITCHEN},
	{'label' : 'Salon', 'category': ChoreCategory.LIVINGROOM},
	{'label' : 'Chambre', 'category': ChoreCategory.BEDROOM},
	{'label' : 'Salle de bain', 'category': ChoreCategory.BATHROOM},
	{'label' : 'Toilettes', 'category': ChoreCategory.TOILETS},
	{'label' : 'Extérieur', 'category': ChoreCategory.OUTSIDE},
	{'label' : 'Général', 'category': ChoreCategory.GENERAL}
]
