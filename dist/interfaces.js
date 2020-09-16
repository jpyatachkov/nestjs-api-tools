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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiErrorResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class ApiErrorResponse {
}
__decorate([
    swagger_1.ApiProperty({
        description: 'HTTP-код ошибки, например 400 или 500',
        example: 403,
    }),
    __metadata("design:type", Number)
], ApiErrorResponse.prototype, "statusCode", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Название ошибки - Bad Request, Internal Server Error',
        example: 'Forbidden',
    }),
    __metadata("design:type", String)
], ApiErrorResponse.prototype, "error", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Сообщение клиенту API',
        example: 'У Вас нет прав на выполнение этой операции',
    }),
    __metadata("design:type", String)
], ApiErrorResponse.prototype, "message", void 0);
exports.ApiErrorResponse = ApiErrorResponse;
//# sourceMappingURL=interfaces.js.map