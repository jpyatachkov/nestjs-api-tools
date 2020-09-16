"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classTransformer = __importStar(require("class-transformer"));
const classValidator = __importStar(require("class-validator"));
const testing_1 = require("@nestjs/testing");
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const constants_1 = require("../constants");
const validation_pipe_1 = require("./validation.pipe");
const faker_1 = __importDefault(require("faker"));
describe('ValidationPipe', () => {
    let pipe;
    let i18nService;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                validation_pipe_1.ValidationPipe,
                {
                    provide: nestjs_i18n_1.I18nRequestScopeService,
                    useValue: {
                        translate: jest.fn(),
                    },
                },
                {
                    provide: constants_1.VALIDATION_PIPE_OPTIONS,
                    useValue: {
                        depth: 10,
                    },
                },
            ],
        }).compile();
        pipe = module.get(validation_pipe_1.ValidationPipe);
        i18nService = module.get(nestjs_i18n_1.I18nRequestScopeService);
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
            [nestjs_i18n_1.I18nRequestScopeService, true],
        ])('%s => %s', (metatype, needsValidation) => {
            it('should not validate built-in types', () => {
                expect(validation_pipe_1.ValidationPipe.toValidate(metatype)).toEqual(needsValidation);
            });
        });
    });
    describe('transform', () => {
        it('should return value as-is if metatype is not defined', async () => {
            const value = faker_1.default.random.uuid();
            expect(await pipe.transform(value, {})).toEqual(value);
        });
        it('should return value as-is if toValidate returns false', async () => {
            const value = faker_1.default.random.uuid();
            jest
                .spyOn(validation_pipe_1.ValidationPipe, 'toValidate')
                .mockImplementation(() => false);
            expect(await pipe.transform(value, {})).toEqual(value);
        });
        it('should throw error if validations fails', async () => {
            const metatype = '1';
            const value = faker_1.default.random.uuid();
            const object = {};
            jest
                .spyOn(validation_pipe_1.ValidationPipe, 'toValidate')
                .mockImplementation(() => true);
            jest
                .spyOn(classTransformer, 'plainToClass')
                .mockImplementation(() => object);
            jest
                .spyOn(classValidator, 'validate')
                .mockImplementation(() => Promise.resolve([1, 2]));
            jest
                .spyOn(pipe, 'processErrors')
                .mockImplementation(() => Promise.resolve(() => ''));
            try {
                await pipe.transform(value, { metatype });
            }
            catch (e) {
                expect(e).toBeInstanceOf(common_1.BadRequestException);
            }
            expect(classTransformer.plainToClass).toBeCalledWith(metatype, value);
            expect(classValidator.validate).toBeCalledWith(object, { whitelist: true });
        });
        it('should return transformed object if validation succeeds', async () => {
            const metatype = '1';
            const value = faker_1.default.random.uuid();
            const object = {};
            jest
                .spyOn(validation_pipe_1.ValidationPipe, 'toValidate')
                .mockImplementation(() => true);
            jest
                .spyOn(classTransformer, 'plainToClass')
                .mockImplementation(() => object);
            jest
                .spyOn(classValidator, 'validate')
                .mockImplementation(() => Promise.resolve([]));
            expect(await pipe.transform(value, { metatype })).toEqual(object);
        });
    });
    describe('processErrors', () => {
        it('should not fail if no errors occurred', async () => {
            expect(await pipe.processErrors([])).toEqual([]);
        });
        it('should call stringifyError for each error', async () => {
            const errors = [
                faker_1.default.random.number(),
                faker_1.default.random.number(),
                faker_1.default.random.number(),
            ];
            const message = faker_1.default.random.word();
            const stringifyErrorSpy = jest
                .spyOn(pipe, 'stringifyError')
                .mockImplementation(() => Promise.resolve([message]));
            const result = await pipe.processErrors(errors);
            expect(result).toEqual(Array(errors.length).fill(message));
            expect(stringifyErrorSpy).toBeCalledTimes(errors.length);
        });
    });
    describe('generateErrorMessages', () => {
        it('should not fail if no error source is empty', async () => {
            expect(await pipe
                .generateErrorMessages(null)).toEqual([]);
        });
        it('should translate all error messages', async () => {
            const length = 10;
            const source = Object.fromEntries(Array(length)
                .fill(null)
                .map(() => [faker_1.default.random.word(), faker_1.default.random.word()]));
            const expected = Array(length).fill('TRANSLATED');
            const translateSpy = jest
                .spyOn(i18nService, 'translate')
                .mockImplementation(() => Promise.resolve('TRANSLATED'));
            const translated = await pipe.generateErrorMessages(source);
            expect(translated).toEqual(expected);
            expect(translateSpy).toBeCalled();
        });
    });
});
//# sourceMappingURL=validation.pipe.spec.js.map