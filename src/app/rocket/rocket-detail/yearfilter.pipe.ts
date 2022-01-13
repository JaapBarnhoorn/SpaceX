import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearfilter'
})
export class YearfilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();

    return value.filter(function(rocket: any){
        return JSON.stringify(rocket).toLowerCase().includes(args);
    });
}


}
