"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxValuePipe = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("./../constants");
const lodash_1 = __importDefault(require("lodash"));
class MaxValuePipe {
    constructor(maxValue = constants_1.POSTGRES_MAX_INT) {
        this.maxValue = maxValue;
    }
    transform(value) {
        if (lodash_1.default.isNumber(value) && value > this.maxValue) {
            throw new common_1.BadRequestException(`Value ${value} is bigger then ${this.maxValue}`);
        }
        return value;
    }
}
exports.MaxValuePipe = MaxValuePipe;
//# sourceMappingURL=max-value.pipe.js.map