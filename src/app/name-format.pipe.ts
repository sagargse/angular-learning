import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFormat'
})
export class NameFormatPipe implements PipeTransform {

  transform(value: string, args: string): string {
    if(args== 'Male'){
      return 'Mr. '+value;
    }else{
      return 'Ms. '+value;
    }
  }

}
