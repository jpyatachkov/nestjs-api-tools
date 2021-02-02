"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEntityWithOptimisticLock = exports.createOrUpdateEntityWithOptimisticLock = exports.throwExceptionIfEntityNotFound = exports.mapResponseData = void 0;
const operators_1 = require("rxjs/operators");
exports.mapResponseData = operators_1.map((response) => response.data);
function throwExceptionIfEntityNotFound(entity, exception) {
    if (!entity) {
        throw exception;
    }
    return entity;
}
exports.throwExceptionIfEntityNotFound = throwExceptionIfEntityNotFound;
async function createOrUpdateEntityWithOptimisticLock(repository, entity, data, version, emptyEntity, exception) {
    if (!entity) {
        emptyEntity.version = 1;
        entity = await repository.save(emptyEntity);
    }
    return updateEntityWithOptimisticLock(repository, entity, data, version, exception);
}
exports.createOrUpdateEntityWithOptimisticLock = createOrUpdateEntityWithOptimisticLock;
async function updateEntityWithOptimisticLock(repository, entity, data, version, exception) {
    if (!data) {
        return entity;
    }
    const findConditions = {
        id: entity.id,
        version,
    };
    const { affected } = await repository.update(findConditions, {
        ...data,
        version: version + 1,
    });
    if (!affected) {
        throw exception;
    }
    return entity;
}
exports.updateEntityWithOptimisticLock = updateEntityWithOptimisticLock;
//# sourceMappingURL=operators.js.map