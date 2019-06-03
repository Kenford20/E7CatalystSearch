import { Pipe, PipeTransform } from '@angular/core';
/*
    replaces any characters that separate words with spaces
    ie: foo-bar-foobar = foo bar foobar
*/

@Pipe({name: 'spaceSeparate'})

export class SpaceSeparatePipe implements PipeTransform {
  transform(text: string): string {
    return text.replace(/[^a-zA-Z0-9]/g, ' ');
  }
}