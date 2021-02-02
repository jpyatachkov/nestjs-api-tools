import {
  createOrUpdateEntityWithOptimisticLock,
  mapResponseData,
  throwExceptionIfEntityNotFound,
  updateEntityWithOptimisticLock,
} from './operators';

import {Repository} from 'typeorm';
import faker from 'faker';
import {of} from 'rxjs';

jest.mock('class-transformer', () => ({
  ...(jest.requireActual('class-transformer')),
  classToPlain: jest.fn(),
}));

describe('operators', () => {
  describe('mapResponseData', () => {
    it('должен возвращать атрибут data из объекта AxiosResponse', (done) => {
      const response = {
        data: faker.helpers.createCard(),
      };

      of(response)
        .pipe(
          mapResponseData,
        )
        .subscribe((data) => {
          expect(data).toEqual(response.data);
          done();
        });
    });
  });

  describe('throwExceptionIfEntityNotFound', () => {
    it('должен кидать исключение, если переданный параметр - null', () => {
      try {
        throwExceptionIfEntityNotFound(null, new Error());
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
      }

      expect.hasAssertions();
    });

    it('должен возвращать переданный параметр', () => {
      expect(throwExceptionIfEntityNotFound({}, new Error())).toEqual({});
    });
  });

  describe('createOrUpdateEntityWithOptimisticLock', () => {
    let entity: Record<string, unknown>;
    let repository: Repository<any>;

    beforeEach(() => {
      entity = {};
      repository = {
        save: jest.fn(),
        update: jest.fn(),
      } as any;
    });

    it('должен создавать сущность, если она не передана', async () => {
      const emptyEntity = {};

      const saveSpy = jest
        .spyOn(repository, 'save')
        .mockImplementation(async () => entity);
      const updateSpy = jest
        .spyOn(repository, 'update')
        .mockImplementation(async () => ({affected: 1}) as any);

      await createOrUpdateEntityWithOptimisticLock(
        repository,
        null,
        {},
        1,
        emptyEntity,
        new Error(),
      );

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
        .mockImplementation(async () => ({affected: 1}) as any);

      await createOrUpdateEntityWithOptimisticLock(
        repository,
        entity,
        {},
        1,
        {},
        new Error(),
      );

      expect(saveSpy).not.toBeCalled();
    });
  });

  describe('updateEntityWithOptimisticLock', () => {
    let entity: Record<string, unknown>;
    let repository: Repository<any>;

    beforeEach(() => {
      entity = {
        id: faker.random.number(),
      };

      repository = {
        update: jest.fn(),
      } as any;
    });

    it('должен возвращать сущность без изменений, если ее нечем обновлять', async () => {
      const updateSpy = jest
        .spyOn(repository, 'update')
        .mockImplementation(async () => ({affected: 1}) as any);

      await updateEntityWithOptimisticLock(
        repository,
        entity,
        null,
        1,
        new Error(),
      );

      expect(updateSpy).not.toBeCalled();
    });

    it('должен кидать исключение, если сущность с такой версией уже нет', async () => {
      jest
        .spyOn(repository, 'update')
        .mockImplementation(async () => ({affected: 0}) as any);

      try {
        await updateEntityWithOptimisticLock(
          repository,
          entity,
          {},
          1,
          new Error(),
        );
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
      }

      expect.hasAssertions();
    });

    it('должен обновлять сущность и уведичивать ее версию', async () => {
      const data = {
        [faker.lorem.word()]: faker.random.number(),
      };
      const version = faker.random.number();

      const updateSpy = jest
        .spyOn(repository, 'update')
        .mockImplementation(async () => ({affected: 1}) as any);

      await updateEntityWithOptimisticLock(
        repository,
        entity,
        data,
        version,
        new Error(),
      );

      expect(updateSpy).toBeCalledWith(
        {
          id: entity.id,
          version,
        },
        {
          ...data,
          version: version + 1,
        },
      );
    });
  });
});
