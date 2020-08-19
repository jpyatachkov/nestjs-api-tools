"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const constants_1 = require("@/constants");
const discord_service_1 = require("./discord.service");
const discord_js_1 = require("discord.js");
const faker_1 = __importDefault(require("faker"));
describe('DiscordService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                discord_service_1.DiscordService,
                {
                    provide: constants_1.DISCORD_SERVICE_OPTIONS,
                    useValue: {
                        debug: true,
                        domain: faker_1.default.internet.domainName(),
                        id: null,
                        token: null,
                    },
                },
            ],
        }).compile();
        service = module.get(discord_service_1.DiscordService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    it('should not create hook if id and token not defined', () => {
        expect(service.hook).toBeUndefined();
    });
    describe('emitError', () => {
        it('should do nothing if hook not defined', async () => {
            expect(await service.emitError(faker_1.default.random.word(), faker_1.default.random.word())).toBeNull();
        });
        it('should send error message', async () => {
            service.hook = {
                send: jest.fn(),
            };
            expect(await service.emitError(faker_1.default.random.word(), faker_1.default.random.word())).not.toBeNull();
            expect(service.hook.send).toBeCalledWith(expect.any(discord_js_1.MessageEmbed));
        });
    });
});
//# sourceMappingURL=discord.service.spec.js.map