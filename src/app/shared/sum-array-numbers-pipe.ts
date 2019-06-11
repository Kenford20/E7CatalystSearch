import { Pipe, PipeTransform } from '@angular/core';
/*
    receives an array and just returns the sum of that array as an integer
*/

@Pipe({name: 'sumNumbers'})

export class SumArrayNumbers implements PipeTransform {
    transform(array) {
        // if(array) {
            return array.reduce((a,b) => parseInt(a) + parseInt(b));
        // } else {
        //     return array;
        // }
    }
}