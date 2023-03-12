import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailPipe'
})
export class EmailPipePipe implements PipeTransform {
  transform(value: string): string {
    const resp = value.split('@');
    return resp[0];
  }
}
