"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const testing_1 = require("@nestjs/testing");
const ip_allowlist_guard_1 = require("./ip-allowlist.guard");
const core_1 = require("@nestjs/core");
const faker_1 = __importDefault(require("faker"));
describe('IpAllowlistGuard', () => {
    let guard;
    let reflector;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                ip_allowlist_guard_1.IpAllowlistGuard,
                {
                    provide: constants_1.IP_ALLOWLIST_GUARD_OPTIONS,
                    useValue: {
                        debug: false,
                        allowedIps: [],
                    },
                },
                {
                    provide: core_1.Reflector,
                    useValue: {
                        get: jest.fn(),
                    },
                },
            ],
        }).compile();
        guard = module.get(ip_allowlist_guard_1.IpAllowlistGuard);
        reflector = module.get(core_1.Reflector);
    });
    it('should be defined', () => {
        expect(guard).toBeDefined();
    });
    describe('canActivate', () => {
        let context;
        let request;
        beforeEach(() => {
            guard.options.debug = false;
            context = {
                switchToHttp: jest.fn(() => ({
                    getRequest: jest.fn(() => request),
                })),
            };
            request = {
                ip: faker_1.default.internet.ip(),
                path: faker_1.default.internet.url(),
            };
        });
        it('should do nothing and return true if debug is true', () => {
            guard.options.debug = true;
            expect(guard.canActivate(context)).toBeTruthy();
            expect(context.switchToHttp).not.toBeCalled();
        });
        it('should return false on empty allowlist', () => {
            guard.options = {
                debug: false,
            };
            const getAllowedIpsSpy = jest
                .spyOn(guard, 'getAllowedIps')
                .mockReturnValue([]);
            expect(guard.canActivate(context)).toBeFalsy();
            expect(getAllowedIpsSpy).toBeCalledWith(context);
        });
        it('should return false if IP is not in allowlist', () => {
            request.ip = '167.19.78.14';
            guard.options = {
                debug: false,
            };
            const getAllowedIpsSpy = jest
                .spyOn(guard, 'getAllowedIps')
                .mockReturnValue(['127.0.0.1', '197.0.10.15']);
            expect(guard.canActivate(context)).toBeFalsy();
            expect(getAllowedIpsSpy).toBeCalledWith(context);
        });
        it('should return true if IP in allowlist', () => {
            guard.options = {
                debug: false,
            };
            const getAllowedIpsSpy = jest
                .spyOn(guard, 'getAllowedIps')
                .mockReturnValue(['127.0.0.1', '197.0.10.15', request.ip]);
            expect(guard.canActivate(context)).toBeTruthy();
            expect(getAllowedIpsSpy).toBeCalledWith(context);
        });
        it('should return true if IP in one of allowlist ranges', () => {
            request.ip = '178.176.72.59';
            guard.options = {
                debug: false,
            };
            const getAllowedIpsSpy = jest
                .spyOn(guard, 'getAllowedIps')
                .mockReturnValue(['127.0.0.1', '197.0.10.15', '178.176.72.0/24']);
            expect(guard.canActivate(context)).toBeTruthy();
            expect(getAllowedIpsSpy).toBeCalledWith(context);
        });
    });
    describe('getAllowedIps', () => {
        let context;
        beforeEach(() => {
            context = {
                getClass: jest.fn(),
                getHandler: jest.fn(),
            };
        });
        it('should return ips from meta without ips from settings if meta provided', () => {
            const ips = [
                faker_1.default.internet.ip(),
                faker_1.default.internet.ip(),
            ];
            guard.options = {
                debug: false,
                allowedIps: ['127.0.0.1'],
            };
            const getSpy = jest
                .spyOn(reflector, 'get')
                .mockReturnValue(ips);
            expect(guard.getAllowedIps(context)).toEqual([...ips, ...ips]);
            expect(context.getClass).toBeCalledTimes(1);
            expect(context.getHandler).toBeCalledTimes(1);
            expect(getSpy).toBeCalledTimes(2);
            expect(getSpy).toBeCalledWith(constants_1.IP_ALLOWLIST, undefined);
            expect(getSpy).toBeCalledWith(constants_1.IP_ALLOWLIST, undefined);
        });
        describe.each([
            [[]],
            [undefined],
        ])('ips: %o', (ips) => {
            it('should return ips from settings if no meta provided', () => {
                guard.options = {
                    debug: false,
                    allowedIps: ['127.0.0.1'],
                };
                const getSpy = jest
                    .spyOn(reflector, 'get')
                    .mockReturnValue(ips);
                expect(guard.getAllowedIps(context)).toEqual(['127.0.0.1']);
                expect(context.getClass).toBeCalledTimes(1);
                expect(context.getHandler).toBeCalledTimes(1);
                expect(getSpy).toBeCalledTimes(2);
                expect(getSpy).toBeCalledWith(constants_1.IP_ALLOWLIST, undefined);
                expect(getSpy).toBeCalledWith(constants_1.IP_ALLOWLIST, undefined);
            });
        });
    });
});
//# sourceMappingURL=ip-allowlist.guard.spec.js.map