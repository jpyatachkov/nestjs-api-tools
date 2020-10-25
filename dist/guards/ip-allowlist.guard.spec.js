"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const constants_1 = require("../constants");
const ip_allowlist_guard_1 = require("./ip-allowlist.guard");
const faker_1 = __importDefault(require("faker"));
describe('IpAllowlistGuard', () => {
    let guard;
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
            ],
        }).compile();
        guard = module.get(ip_allowlist_guard_1.IpAllowlistGuard);
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
        it('should do nothing if debug is true', () => {
            guard.options.debug = true;
            expect(guard.canActivate(context)).toBeTruthy();
            expect(context.switchToHttp).not.toBeCalled();
        });
        it('should return false on empty allowlist', () => {
            guard.options = {
                debug: false,
                allowedIps: [],
            };
            expect(guard.canActivate(context)).toBeFalsy();
        });
        it('should return false if IP is not in allowlist', () => {
            request.ip = '167.19.78.14';
            guard.options = {
                debug: false,
                allowedIps: ['127.0.0.1', '197.0.10.15'],
            };
            expect(guard.canActivate(context)).toBeFalsy();
        });
        it('should return true if IP in allowlist', () => {
            guard.options = {
                debug: false,
                allowedIps: ['127.0.0.1', '197.0.10.15', request.ip],
            };
            expect(guard.canActivate(context)).toBeTruthy();
        });
    });
});
//# sourceMappingURL=ip-allowlist.guard.spec.js.map