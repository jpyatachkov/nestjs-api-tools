"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ValidationPipe_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const nestjs_i18n_1 = require("nestjs-i18n");
const constants_1 = require("@/constants");
const class_transformer_1 = require("class-transformer");
let ValidationPipe = ValidationPipe_1 = class ValidationPipe {
    constructor(i18n, options) {
        this.i18n = i18n;
        this.options = options;
        this.logger = new common_1.Logger(ValidationPipe_1.name);
    }
    static toValidate(metatype) {
        return ![
            String,
            Boolean,
            Number,
            Array,
            Object,
        ].includes(metatype);
    }
    async transform(value, { metatype }) {
        if (!metatype || !ValidationPipe_1.toValidate(metatype)) {
            return value;
        }
        const object = class_transformer_1.plainToClass(metatype, value);
        const errors = await class_validator_1.validate(object, { whitelist: true });
        if (errors.length > 0) {
            throw new common_1.BadRequestException(await this.processErrors(errors));
        }
        return object;
    }
    async processErrors(errors) {
        const messages = [];
        for (const error of errors) {
            messages.push(...await this.stringifyError(error));
        }
        return messages;
    }
    async stringifyError(error, depth = 0) {
        if (depth > this.options.depth || ValidationPipe_1.DEFAULT_DEPTH) {
            return [];
        }
        const messages = await this.generateErrorMessages(error.constraints);
        const childMessages = await Promise.all(error.children.map(async (child) => this.stringifyError(child, depth + 1)));
        return [...messages, ...childMessages.flat()];
    }
    async generateErrorMessages(source) {
        if (!source) {
            return [];
        }
        this.logger.error(source);
        return Promise.all(Object
            .values(source)
            .map(async (message) => await this.i18n.translate(message)));
    }
};
ValidationPipe.DEFAULT_DEPTH = 10;
ValidationPipe = ValidationPipe_1 = __decorate([
    common_1.Injectable(),
    __param(1, common_1.Inject(constants_1.VALIDATION_PIPE_OPTIONS)),
    __metadata("design:paramtypes", [nestjs_i18n_1.I18nRequestScopeService, Object])
], ValidationPipe);
exports.ValidationPipe = ValidationPipe;
//# sourceMappingURL=validation.pipe.js.map