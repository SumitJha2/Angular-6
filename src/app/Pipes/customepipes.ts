
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'customepipe'})
export class customepipe implements PipeTransform {
  transform(value: string): string {  
    return "("+value+")";
  }

}

