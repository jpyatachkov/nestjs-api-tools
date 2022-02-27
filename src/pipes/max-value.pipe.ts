import {BadRequestException, PipeTransform} from '@nestjs/common';

import {POSTGRES_MAX_INT} from './../constants';
import _ from 'lodash';

export class MaxValuePipe implements PipeTransform {

  public constructor(
    private readonly maxValue = POSTGRES_MAX_INT,
  ) { }

  public transform(value: any): any {
    if (_.isNumber(value) && value > this.maxValue) {
      throw new BadRequestException(`Value ${value} is bigger then ${this.maxValue}`);
    }

    return value
  }
}
