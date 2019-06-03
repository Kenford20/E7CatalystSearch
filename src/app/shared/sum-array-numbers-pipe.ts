import { Pipe, PipeTransform } from '@angular/core';
/*
    replaces any characters that separate words with spaces
    ie: foo-bar-foobar = foo bar foobar
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