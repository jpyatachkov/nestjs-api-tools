import * as classTransformer from 'class-transformer';
import * as classValidator from 'class-validator';

import {Test, TestingModule} from '@nestjs/testing';

import {BadRequestException} from '@nestjs/common';
import {I18nRequestScopeService} from 'nestjs-i18n';
import {VALIDATION_PIPE_OPTIONS} from '../constants';
import {ValidationPipe} from './validation.pipe';
import faker from 'faker';

describe('ValidationPipe', () => {
  let pipe: ValidationPipe;

  let i18nService: I18nRequestScopeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ValidationPipe,
        {
          provide: I18nRequestScopeService,
          useValue: {
            translate: jest.fn(),
          },
        },
        {
          provide: VALIDATION_PIPE_OPTIONS,
          useValue: {
            depth: 10,
          },
        },
      ],
    }).compile();

    pipe = module.get<ValidationPipe>(ValidationPipe);
    i18nService = module.get<I18nRequestScopeService>(I18nRequestScopeService);

    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(pipe).toBeDefined();
  });

  describe('static toValidate', () => {
    describe.each([
      [String, false],
      [Boolean, false],
      [Number, false],
      [Array, false],
      [Object, false],
      [I18nRequestScopeService, true],
    ])('%s => %s', (metatype: any, needsValidation: boolean) => {
      it('should not validate built-in types', () => {
        expect((ValidationPipe as any).toValidate(metatype)).toEqual(needsValidation);
      });
    });
  });

  describe('transform', () => {
    it('should return value as-is if metatype is not defined', async () => {
      const value = faker.random.uuid();
      expect(await pipe.transform(value, {} as any)).toEqual(value);
    });

    it('should return value as-is if toValidate returns false', async () => {
      const value = faker.random.uuid();

      jest
        .spyOn(ValidationPipe as any, 'toValidate')
        .mockImplementation(() => false);

      expect(await pipe.transform(value, {} as any)).toEqual(value);
    });

    it('should throw error if validations fails', async () => {
      const metatype = '1';
      const value = faker.random.uuid();
      const object = {};

      jest
        .spyOn(ValidationPipe as any, 'toValidate')
        .mockImplementation(() => true);
      jest
        .spyOn(classTransformer, 'plainToClass')
        .mockImplementation(() => object);
      jest
        .spyOn(classValidator, 'validate')
        .mockImplementation(() => Promise.resolve([1, 2] as any));
      jest
        .spyOn(pipe as any, 'processErrors')
        .mockImplementation(() => Promise.resolve(() => ''));

      try {
        await pipe.transform(value, {metatype} as any);
      } catch (e) {
        expect(e).toBeInstanceOf(BadRequestException);
      }

      expect(classTransformer.plainToClass).toBeCalledWith(metatype, value);
      expect(classValidator.validate).toBeCalledWith(object, {whitelist: true});
    });

    it('should return transformed object if validation succeeds', async () => {
      const metatype = '1';
      const value = faker.random.uuid();
      const object = {};

      jest
        .spyOn(ValidationPipe as any, 'toValidate')
        .mockImplementation(() => true);
      jest
        .spyOn(classTransformer, 'plainToClass')
        .mockImplementation(() => object);
      jest
        .spyOn(classValidator, 'validate')
        .mockImplementation(() => Promise.resolve([] as any));

      expect(await pipe.transform(value, {metatype} as any)).toEqual(object);
    });
  });

  describe('processErrors', () => {
    it('should not fail if no errors occurred', async () => {
      expect(
        await (pipe as any).processErrors([]),
      ).toEqual([]);
    });

    it('should call stringifyError for each error', async () => {
      const errors = [
        faker.random.number(),
        faker.random.number(),
        faker.random.number(),
      ];
      const message = faker.random.word();

      const stringifyErrorSpy = jest
        .spyOn(pipe as any, 'stringifyError')
        .mockImplementation(() => Promise.resolve([message]));

      const result = await (pipe as any).processErrors(errors as any);

      expect(result).toEqual(Array(errors.length).fill(message));
      expect(stringifyErrorSpy).toBeCalledTimes(errors.length);
    });
  });

  describe('generateErrorMessages', () => {
    it('should not fail if no error source is empty', async () => {
      expect(
        await (pipe as any)
          .generateErrorMessages(null),
      ).toEqual([]);
    });

    it('should translate all error messages', async () => {
      const length = 10;
      const source = Object.fromEntries(
        Array(length)
          .fill(null)
          .map(() => [faker.random.word(), faker.random.word()]),
      );
      const expected = Array(length).fill('TRANSLATED');

      const translateSpy = jest
        .spyOn(i18nService, 'translate')
        .mockImplementation(() => Promise.resolve('TRANSLATED'));

      const translated = await (pipe as any).generateErrorMessages(source);

      expect(translated).toEqual(expected);
      expect(translateSpy).toBeCalled();
    });
  });
});
