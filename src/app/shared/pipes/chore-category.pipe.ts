import { Pipe, PipeTransform } from '@angular/core';
import { Chore, ChoreCategory } from 'src/app/models/chore';

@Pipe({
  name: 'choreCategory'
})
export class ChoreCategoryPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    console.log('Value à transformer : ', value);
    switch(value) {
      case 'KITCHEN':
        return 'Cuisine';
      case 'BATHROOM':
        return 'Salle de bains';
      case 'BEDROOM':
        return 'Chambre';
      case 'GENERAL':
        return 'Global';
      case 'OUTSIDE':
        return 'Extérieur';
      case 'TOILETS':
        return 'Toilettes';
      case 'LIVINGROOM':
        return 'Salon';
      default:
        console.log('No value found for ', value);
        
    }
    return '';
  }

}
