import {DeepPartial, FindConditions, Repository} from 'typeorm';

import {AxiosResponse} from 'axios';
import {map} from 'rxjs/operators';

/**
 * Transforms Axios response object to response data.
 */
export const mapResponseData = map(
  (response: AxiosResponse) => response.data,
);

/**
 * Throws exception if entity non found.
 * @param entity
 */
export function throwExceptionIfEntityNotFound<T>(entity: T | null, exception: Error): T {
  if (!entity) {
    throw exception;
  }

  return entity;
}

/**
 * Updates entity with optimistic lock - if expected version does not match one in DB, 409 error is thrown.
 * If there is no entity, it will be created by template given.
 * @param repository
 * @param entity
 * @param data
 * @param version
 * @param emptyEntity
 * @param exception
 */
export async function createOrUpdateEntityWithOptimisticLock<T>(
  repository: Repository<T>,
  entity: T,
  data: DeepPartial<T>,
  version: number,
  emptyEntity: DeepPartial<T>,
  exception: Error,
): Promise<T> {
  if (!entity) {
    (emptyEntity as any).version = 1;
    entity = await repository.save(emptyEntity);
  }

  return updateEntityWithOptimisticLock(
    repository,
    entity,
    data,
    version,
    exception,
  );
}

/**
 * Обновляет сущность с учетом оптимистичного лока - если ожидаемая версия и версия в БД при обноалении
 * не совпадает, кидается 409.
 * @param repository
 * @param entity
 * @param data
 * @param version
 * @param exception
 */
export async function updateEntityWithOptimisticLock<T>(
  repository: Repository<T>,
  entity: T,
  data: DeepPartial<T>,
  version: number,
  exception: Error,
): Promise<T> {
  if (!data) {
    return entity;
  }

  const findConditions: FindConditions<T> = {
    id: (entity as any).id,
    version,
  } as any;

  const {affected} = await repository.update(
    findConditions,
    {
      ...data,
      version: version + 1,
    } as any,
  );

  if (!affected) {
    throw exception;
  }

  return entity;
}
