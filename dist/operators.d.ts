import { DeepPartial, Repository } from 'typeorm';
import { AxiosResponse } from 'axios';
export declare const mapResponseData: import("rxjs").OperatorFunction<AxiosResponse<any, any>, any>;
export declare function throwExceptionIfEntityNotFound<T>(entity: T | null, exception: Error): T;
export declare function createOrUpdateEntityWithOptimisticLock<T>(repository: Repository<T>, entity: T, data: DeepPartial<T>, version: number, emptyEntity: DeepPartial<T>, exception: Error): Promise<T>;
export declare function updateEntityWithOptimisticLock<T>(repository: Repository<T>, entity: T, data: DeepPartial<T>, version: number, exception: Error): Promise<T>;
