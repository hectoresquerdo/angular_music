import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCancion',
  pure: false,
})
export class FiltroPipe implements PipeTransform {

  transform(items: any[], filter: Record<string, any>): any {
    if (!items || !filter) {
      return items;
    }

    const key = Object.keys(filter)[0];
    const value = filter[key];

    return items.filter((e) => e[key].toLowerCase().indexOf(value) !== -1);
  }
}
