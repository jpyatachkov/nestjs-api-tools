import {Inject, Injectable} from '@nestjs/common';

import {CACHE_SERVICE_OPTIONS} from '@/constants';
import NodeCache from 'node-cache';

export interface CacheServiceOptions {
  ttl: number;
  useClones: boolean;
}

@Injectable()
export class CacheService {

  private readonly cache: NodeCache;

  public constructor(
    @Inject(CACHE_SERVICE_OPTIONS)
    private readonly options: CacheServiceOptions,
  ) {
    this.cache = new NodeCache({
      stdTTL: options.ttl,
      useClones: options.useClones,
    });
  }

  public has(key: string): boolean {
    return this.cache.has(key);
  }

  public get(key: string): any {
    return this.cache.get(key);
  }

  public set(key: string, value: any, ttl: number = null): boolean {
    if (ttl !== null) {
      return this.cache.set(key, value, ttl);
    } else {
      return this.cache.set(key, value);
    }
  }
}
