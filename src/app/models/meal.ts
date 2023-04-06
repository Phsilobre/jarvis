export class Meal {
    constructor(
        public id: number = -1,
        public title: string = '') {}
    // TODO Champs à rajouter :
    // Ingrédients
    // Recette
    // Duree preparation
    // Difficulté
}

export class PlannedMeal {
    constructor(public meal: Meal, public dayOfMeal: number) {}
}

export class WeekMeals {

    getMeal(day: number): Meal {
        const plannedMeal: PlannedMeal | undefined = this.meals.find((x) => x.dayOfMeal === day);
        if (plannedMeal) {
            return plannedMeal.meal;
        } else {
            return null;
        }
    }

    getMealTitle(day: number): string {
        const plannedMeal: PlannedMeal | undefined = this.meals.find((x) => x.dayOfMeal === day);
        if (plannedMeal) {
            return plannedMeal.meal.title;
        } else {
            return '';
        }
    }

    setMeal(meal: Meal, day: number) {
        this.meals[day].meal = meal;
    }

    constructor(public lunchDinner: string, public meals: PlannedMeal[]) {}

}

export class DayMeals {

    constructor(public lunchMeal: Meal, public dinnerMeal: Meal) {}
}

export class FullPlanning {
   
    init() {
      this.meals[0] = new DayMeals(new Meal(), new Meal());
      this.meals[1] = new DayMeals(new Meal(), new Meal());
      this.meals[2] = new DayMeals(new Meal(), new Meal());
      this.meals[3] = new DayMeals(new Meal(), new Meal());
      this.meals[4] = new DayMeals(new Meal(), new Meal());
      this.meals[5] = new DayMeals(new Meal(), new Meal());
      this.meals[6] = new DayMeals(new Meal(), new Meal());
    }

    getDayMeal(nb: number): DayMeals {
        return this.meals[nb];
    }

    getLunchMealTitle(nb: number): string {
        return this.meals[nb].lunchMeal.title;
    }

    getLunchMeal(nb: number): Meal {
        return this.meals[nb].lunchMeal;
    }

    getDinnerMealTitle(nb: number): string {
        return this.meals[nb].dinnerMeal.title;
    }

    getDinnerMeal(nb: number): Meal {
        return this.meals[nb].dinnerMeal;
    }

    updateLunch(meal: Meal, dayNumber: number) {
        this.meals[dayNumber].lunchMeal = meal; 
    }

    updateDinner(meal: Meal, dayNumber: number) {
        this.meals[dayNumber].dinnerMeal = meal;
    }

    updateAllMeals(meals: Meal[]) {
        let mealsCounter = 0;
        this.meals.forEach((dayMeals: DayMeals) => {
            dayMeals.lunchMeal = meals[mealsCounter];
            dayMeals.dinnerMeal = meals[mealsCounter + 1];
            mealsCounter += 2;
        })
    }

    constructor(public meals: DayMeals[] = []) {}

}