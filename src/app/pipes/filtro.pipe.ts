import { Pipe, PipeTransform } from '@angular/core';
import { Cancion } from '../cancion';
import { Canciones } from '../coleccion';

@Pipe({
  name: 'filtroCancion',
  pure: false,
})
export class FiltroPipe implements PipeTransform {
  /*
  transform(value: any, busqueda: string) {

    if (!busqueda) {
      return value;
    }
    const canciones: any[] = [];
    for (let i = 0; i <= value.lenght; i++) {
      let values: string = value[i].value.toLowerCase();
      if (values.includes(busqueda.toLowerCase())) {

        canciones.push(value[i])
      }
      return values;

    }
  }
}
  transform(value: any, input: string) {
  if (input) {
    input = input.toLowerCase();
    return value.filter(function (el: any) {
      return el.toLowerCase().indexOf(input) > -1;
    })
  }
  return value;
}
}
*/
  transform(items: any[], filter: Record<string, any>): any {
    if (!items || !filter) {
      return items;
    }

    const key = Object.keys(filter)[0];
    const value = filter[key.toLowerCase()];

    return items.filter((e) => e[key].toLowerCase().indexOf(value) !== -1);
  }
}
