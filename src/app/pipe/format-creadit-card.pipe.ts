import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCreaditCard'
})
export class FormatCreaditCardPipe implements PipeTransform {

  transform(value: string): string {
    const v1=value.substring(0,4);
    const v2=value.substring(4,8);
    const v3=value.substring(8,12);
    const v4=value.substring(12,16);


    return `${v1}-${v2}-${v3}-${v4}`;
  } 

}
