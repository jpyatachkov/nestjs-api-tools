import {Test, TestingModule} from '@nestjs/testing';

import {CACHE_SERVICE_OPTIONS} from '@/constants';
import {CacheService} from './cache.service';
import faker from 'faker';

jest.mock('node-cache');

describe('CacheService', () => {
  let service: CacheService;

  let cache;
  let key, value, ttl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CacheService,
        {
          provide: CACHE_SERVICE_OPTIONS,
          useValue: {
            ttl: 0,
            useClones: false,
          },
        },
      ],
    }).compile();

    service = module.get<CacheService>(CacheService);

    cache = {
      has: jest.fn(),
      get: jest.fn(),
      set: jest.fn(),
    };

    (service as any).cache = cache;

    key = faker.random.word();
    value = faker.random.word();
    ttl = faker.random.number();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('has', () => {
    it('should call has method from cache', () => {
      service.has(key);
      expect(cache.has).toBeCalledWith(key);
    });
  });

  describe('get', () => {
    it('should call get method from cache', () => {
      service.get(key);
      expect(cache.get).toBeCalledWith(key);
    });
  });

  describe('set', () => {
    it('should call set method from cache', () => {
      service.set(key, value);
      expect(cache.set).toBeCalledWith(key, value);
    });

    it('should call set method from cache with ttl passed', () => {
      service.set(key, value, ttl);
      expect(cache.set).toBeCalledWith(key, value, ttl);
    });

    it('should call has method from cache with ttl === 0', () => {
      service.set(key, value, 0);
      expect(cache.set).toBeCalledWith(key, value, 0);
    });
  });
});
