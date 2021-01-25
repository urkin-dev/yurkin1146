import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(goods: any[], ascOrder: boolean): any[] {
    let order: number;
    ascOrder === true ? order = 1 : order = -1;
    goods.sort((a, b) => {
      if (a.title > b.title) {
        return order;
      }
      if (b.title > a.title) {
        return -order;
      }
      return 0;
    });

    goods.sort((a, b) => {
      return a.status - b.status;
    });

    return goods;
  }

}
