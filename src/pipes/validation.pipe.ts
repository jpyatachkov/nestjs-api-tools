import {ArgumentMetadata, BadRequestException, Inject, Injectable, Logger, PipeTransform} from '@nestjs/common';
import {ValidationError, validate} from 'class-validator';

import {I18nRequestScopeService} from 'nestjs-i18n';
import {VALIDATION_PIPE_OPTIONS} from '../constants';
import {plainToClass} from 'class-transformer';

export interface ValidationPipeOptions {
  depth: number;
}

@Injectable()
export class ValidationPipe implements PipeTransform {

  public static readonly DEFAULT_DEPTH = 10;

  private readonly logger: Logger = new Logger(ValidationPipe.name);

  private static toValidate(metatype: any): boolean {
    return ![
      String,
      Boolean,
      Number,
      Array,
      Object,
    ].includes(metatype);
  }

  public constructor(
    private readonly i18n: I18nRequestScopeService,
    @Inject(VALIDATION_PIPE_OPTIONS)
    private readonly options: ValidationPipeOptions,
  ) {
  }

  public async transform(value: any, {metatype}: ArgumentMetadata): Promise<any> {
    if (!metatype || !ValidationPipe.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object, {whitelist: true});

    if (errors.length > 0) {
      throw new BadRequestException(await this.processErrors(errors));
    }

    return object;
  }

  private async processErrors(errors: ValidationError[]): Promise<string[]> {
    const messages = [];

    for (const error of errors) {
      messages.push(...await this.stringifyError(error));
    }

    return messages;
  }

  private async stringifyError(error: ValidationError, depth = 0): Promise<string[]> {
    if (depth > this.options.depth || ValidationPipe.DEFAULT_DEPTH) {
      return [];
    }

    const messages = await this.generateErrorMessages(error.constraints);
    const childMessages = await Promise.all(
      error.children.map(async child => this.stringifyError(child, depth + 1)),
    );
    return [...messages, ...childMessages.flat()];
  }

  private async generateErrorMessages(source: any): Promise<string[]> {
    if (!source) {
      return [];
    }

    this.logger.error(source);

    return Promise.all(
      Object
        .values(source)
        .map(async (message: string) => await this.i18n.translate(message)),
    );
  }
}
