"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const operators_1 = require("./operators");
const faker_1 = __importDefault(require("faker"));
const rxjs_1 = require("rxjs");
jest.mock('class-transformer', () => ({
    ...(jest.requireActual('class-transformer')),
    classToPlain: jest.fn(),
}));
describe('operators', () => {
    describe('mapResponseData', () => {
        it('должен возвращать атрибут data из объекта AxiosResponse', (done) => {
            const response = {
                data: faker_1.default.helpers.createCard(),
            };
            rxjs_1.of(response)
                .pipe(operators_1.mapResponseData)
                .subscribe((data) => {
                expect(data).toEqual(response.data);
                done();
            });
        });
    });
    describe('throwExceptionIfEntityNotFound', () => {
        it('должен кидать исключение, если переданный параметр - null', () => {
            try {
                operators_1.throwExceptionIfEntityNotFound(null, new Error());
            }
            catch (e) {
                expect(e).toBeInstanceOf(Error);
            }
            expect.hasAssertions();
        });
        it('должен возвращать переданный параметр', () => {
            expect(operators_1.throwExceptionIfEntityNotFound({}, new Error())).toEqual({});
        });
    });
    describe('createOrUpdateEntityWithOptimisticLock', () => {
        let entity;
        let repository;
        beforeEach(() => {
            entity = {};
            repository = {
                save: jest.fn(),
                update: jest.fn(),
            };
        });
        it('должен создавать сущность, если она не передана', async () => {
            const emptyEntity = {};
            const saveSpy = jest
                .spyOn(repository, 'save')
                .mockImplementation(async () => entity);
            const updateSpy = jest
                .spyOn(repository, 'update')
                .mockImplementation(async () => ({ affected: 1 }));
            await operators_1.createOrUpdateEntityWithOptimisticLock(repository, null, {}, 1, emptyEntity, new Error());
            expect(saveSpy).toBeCalledWith({
                ...emptyEntity,
                version: 1,
            });
            expect(updateSpy).toBeCalled();
        });
        it('должен вызывать updateEntityWithOptimisticLock для сущности', async () => {
            const saveSpy = jest
                .spyOn(repository, 'save')
                .mockImplementation(async () => entity);
            jest
                .spyOn(repository, 'update')
                .mockImplementation(async () => ({ affected: 1 }));
            await operators_1.createOrUpdateEntityWithOptimisticLock(repository, entity, {}, 1, {}, new Error());
            expect(saveSpy).not.toBeCalled();
        });
    });
    describe('updateEntityWithOptimisticLock', () => {
        let entity;
        let repository;
        beforeEach(() => {
            entity = {
                id: faker_1.default.random.number(),
            };
            repository = {
                update: jest.fn(),
            };
        });
        it('должен возвращать сущность без изменений, если ее нечем обновлять', async () => {
            const updateSpy = jest
                .spyOn(repository, 'update')
                .mockImplementation(async () => ({ affected: 1 }));
            await operators_1.updateEntityWithOptimisticLock(repository, entity, null, 1, new Error());
            expect(updateSpy).not.toBeCalled();
        });
        it('должен кидать исключение, если сущность с такой версией уже нет', async () => {
            jest
                .spyOn(repository, 'update')
                .mockImplementation(async () => ({ affected: 0 }));
            try {
                await operators_1.updateEntityWithOptimisticLock(repository, entity, {}, 1, new Error());
            }
            catch (e) {
                expect(e).toBeInstanceOf(Error);
            }
            expect.hasAssertions();
        });
        it('должен обновлять сущность и уведичивать ее версию', async () => {
            const data = {
                [faker_1.default.lorem.word()]: faker_1.default.random.number(),
            };
            const version = faker_1.default.random.number();
            const updateSpy = jest
                .spyOn(repository, 'update')
                .mockImplementation(async () => ({ affected: 1 }));
            await operators_1.updateEntityWithOptimisticLock(repository, entity, data, version, new Error());
            expect(updateSpy).toBeCalledWith({
                id: entity.id,
                version,
            }, {
                ...data,
                version: version + 1,
            });
        });
    });
});
//# sourceMappingURL=operators.spec.js.map