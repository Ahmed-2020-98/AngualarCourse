import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDtoEGP'
})
export class UsdPipe implements PipeTransform {

  transform(value: number, current:number=20): unknown {
    return value * current;
  }

}
