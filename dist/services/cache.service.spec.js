"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const constants_1 = require("../constants");
const cache_service_1 = require("./cache.service");
const faker_1 = __importDefault(require("faker"));
jest.mock('node-cache');
describe('CacheService', () => {
    let service;
    let cache;
    let key, value, ttl;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                cache_service_1.CacheService,
                {
                    provide: constants_1.CACHE_SERVICE_OPTIONS,
                    useValue: {
                        ttl: 0,
                        useClones: false,
                    },
                },
            ],
        }).compile();
        service = module.get(cache_service_1.CacheService);
        cache = {
            has: jest.fn(),
            get: jest.fn(),
            set: jest.fn(),
        };
        service.cache = cache;
        key = faker_1.default.random.word();
        value = faker_1.default.random.word();
        ttl = faker_1.default.random.number();
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
//# sourceMappingURL=cache.service.spec.js.map