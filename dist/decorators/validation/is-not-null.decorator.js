"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNotNull = void 0;
const class_validator_1 = require("class-validator");
exports.IsNotNull = (validationOptions) => (object, propertyName) => class_validator_1.registerDecorator({
    name: 'isNotNull',
    target: object.constructor,
    propertyName: propertyName,
    options: validationOptions,
    validator: {
        validate: (value, args) => args.object[propertyName] !== null,
    },
});
//# sourceMappingURL=is-not-null.decorator.js.map