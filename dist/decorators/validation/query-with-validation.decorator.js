"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryWithValidation = void 0;
const common_1 = require("@nestjs/common");
const QueryWithValidation = () => (0, common_1.Query)(new common_1.ValidationPipe({ whitelist: true }));
exports.QueryWithValidation = QueryWithValidation;
//# sourceMappingURL=query-with-validation.decorator.js.map