import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByStatus'
})
export class OrderByStatusPipe implements PipeTransform {

  transform(goods: any[], property: string): any[] {
    if (property === 'status') {
      goods.sort((a, b) => {
        return a[property] - b[property];
      });
    }
    return goods;
  }

}
