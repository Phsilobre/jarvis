import { Pipe, PipeTransform } from '@angular/core';
import { Chore, ChoreCategory } from 'src/app/models/chore';

@Pipe({
  name: 'choreCategory'
})
export class ChoreCategoryPipe implements PipeTransform {

  transform(value: ChoreCategory, ...args: unknown[]): string {
    switch(value) {
      case ChoreCategory.KITCHEN:
        return 'Cuisine';
      case ChoreCategory.BATHROOM:
        return 'Salle de bains';
      case ChoreCategory.BEDROOM:
        return 'Chambre';
      case ChoreCategory.GENERAL:
        return 'Global';
      case ChoreCategory.OUTSIDE:
        return 'Extérieur';
      case ChoreCategory.TOILETS:
        return 'Toilettes';
      case ChoreCategory.LIVINGROOM:
        return 'Salon';
      default:
        console.error('No value found for ', value);
        
    }
    return '';
  }

}
