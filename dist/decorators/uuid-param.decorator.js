"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidParam = void 0;
const common_1 = require("@nestjs/common");
const UuidParam = (queryParamName = 'guid') => (0, common_1.Param)(queryParamName, common_1.ParseUUIDPipe);
exports.UuidParam = UuidParam;
//# sourceMappingURL=uuid-param.decorator.js.map