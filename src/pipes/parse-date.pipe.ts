import {Injectable, PipeTransform} from '@nestjs/common';

@Injectable()
export class ParseDatePipe implements PipeTransform {

  public transform(value: any): Date | null {
    const parsed = Date.parse(value);
    return parsed ? new Date(parsed) : null;
  }
}
