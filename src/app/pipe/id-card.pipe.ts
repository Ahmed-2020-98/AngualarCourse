import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idCard'
})
export class IdCardPipe implements PipeTransform {

  transform(value: string): string{
    // let n = 12345;
    // let arr = value.toString().split('');
    // for (let i = 0; i < arr.length; i++){
    //   arr[i] += arr[i] ;
    // } 
    // arr.slice(1,3)
    
    // let t=value.toString();
    // t.slice(1,3);
    // value=parseInt(t);

    let n1=value.slice(0,1);
    let year=value.slice(1,3);
    const month=value.slice(3,5);
    const day=value.slice(5,7);
    if(n1=='3'){
      year =`20${year}`;
    }
    else if(n1=='2'){
      year=`19${year}`;

    }
    
    return `${year}/${month}/${day}` ;
  }

}
