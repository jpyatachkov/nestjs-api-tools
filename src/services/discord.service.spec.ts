import {Test, TestingModule} from '@nestjs/testing';

import {DISCORD_SERVICE_OPTIONS} from '../constants';
import {DiscordService} from './discord.service';
import {MessageEmbed} from 'discord.js';
import faker from 'faker';

describe('DiscordService', () => {
  let service: DiscordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DiscordService,
        {
          provide: DISCORD_SERVICE_OPTIONS,
          useValue: {
            debug: true,
            domain: faker.internet.domainName(),
            id: null,
            token: null,
          },
        },
      ],
    }).compile();

    service = module.get<DiscordService>(DiscordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should not create hook if id and token not defined', () => {
    expect((service as any).hook).toBeUndefined();
  });

  describe('emitError', () => {
    it('should do nothing if hook not defined', async () => {
      expect(
        await service.emitError(
          faker.random.word(),
          faker.random.word(),
        ),
      ).toBeNull();
    });

    it('should send error message', async () => {
      (service as any).hook = {
        send: jest.fn(),
      };

      expect(
        await service.emitError(
          faker.random.word(),
          faker.random.word(),
        ),
      ).not.toBeNull();
      expect((service as any).hook.send).toBeCalledWith(expect.any(MessageEmbed));
    });
  });
});
