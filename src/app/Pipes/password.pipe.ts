import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, replace?: string): unknown {
    if(value == undefined){
      return value;
    }

    if(replace){
      return replace.repeat(value.length);
    }
    

    return '*'.repeat(value.length);
  }

}
