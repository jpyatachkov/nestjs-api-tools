"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdParam = void 0;
const common_1 = require("@nestjs/common");
const pipes_1 = require("./../pipes");
const IdParam = (queryParamName = 'id') => (0, common_1.Param)(queryParamName, common_1.ParseIntPipe, pipes_1.MaxValuePipe);
exports.IdParam = IdParam;
//# sourceMappingURL=id-param.decorator.js.map