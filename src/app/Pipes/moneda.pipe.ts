import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneda'
})
export class MonedaPipe implements PipeTransform {

  transform(value: any, args?: number): any {     //El simbolo : en los parametros hace que sea opcional dicho parametro
    var flotante = value;
    return "U$" + flotante.toFixed(args);
  }

}
