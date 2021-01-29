import {ArgumentMetadata, Injectable, PipeTransform} from '@nestjs/common';

import _ from 'lodash';

@Injectable()
export class TrimPipe implements PipeTransform {

  public static readonly MAX_DEPTH = 10;

  public transform(value: unknown, metadata: ArgumentMetadata): any {
    const {type} = metadata;

    if (_.isObject(value) && type === 'body') {
      return this.trim(value as Record<string, unknown>);
    }

    return value;
  }

  private trim(object: Record<string, unknown>, depth = 0): Record<string, unknown> {
    for (const key of Object.keys(object)) {
      if (_.isObject(object[key])) {
        if (depth < TrimPipe.MAX_DEPTH) {
          object[key] = this.trim(object[key] as Record<string, unknown>, depth + 1);
        }
      } else if (typeof object[key] === 'string') {
        object[key] = (object[key] as string).trim();
      }
    }

    return object;
  }
}
