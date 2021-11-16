"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var TrimPipe_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrimPipe = void 0;
const common_1 = require("@nestjs/common");
const lodash_1 = __importDefault(require("lodash"));
let TrimPipe = TrimPipe_1 = class TrimPipe {
    transform(value, metadata) {
        const { type } = metadata;
        if (lodash_1.default.isObject(value) && type === 'body') {
            return this.trim(value);
        }
        return value;
    }
    trim(object, depth = 0) {
        for (const key of Object.keys(object)) {
            if (lodash_1.default.isObject(object[key])) {
                if (depth < TrimPipe_1.MAX_DEPTH) {
                    object[key] = this.trim(object[key], depth + 1);
                }
            }
            else if (typeof object[key] === 'string') {
                object[key] = object[key].trim();
            }
        }
        return object;
    }
};
TrimPipe.MAX_DEPTH = 10;
TrimPipe = TrimPipe_1 = __decorate([
    (0, common_1.Injectable)()
], TrimPipe);
exports.TrimPipe = TrimPipe;
//# sourceMappingURL=trim.pipe.js.map