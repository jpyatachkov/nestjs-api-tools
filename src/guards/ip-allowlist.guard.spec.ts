import {IP_ALLOWLIST, IP_ALLOWLIST_GUARD_OPTIONS} from '../constants';
import {Test, TestingModule} from '@nestjs/testing';

import {ExecutionContext} from '@nestjs/common';
import {IpAllowlistGuard} from './ip-allowlist.guard';
import {Reflector} from '@nestjs/core';
import {Request} from 'express';
import faker from 'faker';

describe('IpAllowlistGuard', () => {
  let guard: IpAllowlistGuard;

  let reflector: Reflector;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IpAllowlistGuard,
        {
          provide: IP_ALLOWLIST_GUARD_OPTIONS,
          useValue: {
            debug: false,
            allowedIps: [],
          },
        },
        {
          provide: Reflector,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    guard = module.get(IpAllowlistGuard);
    reflector = module.get(Reflector);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });

  describe('canActivate', () => {
    let context: ExecutionContext;
    let request: Request;

    beforeEach(() => {
      (guard as any).options.debug = false;

      context = {
        switchToHttp: jest.fn(() => ({
          getRequest: jest.fn(() => request),
        })),
      } as any;

      request = {
        ip: faker.internet.ip(),
        path: faker.internet.url(),
      } as any;
    });

    it('should do nothing and return true if debug is true', () => {
      (guard as any).options.debug = true;
      expect(guard.canActivate(context)).toBeTruthy();
      expect(context.switchToHttp).not.toBeCalled();
    });

    it('should return false on empty allowlist', () => {
      (guard as any).options = {
        debug: false,
      };

      const getAllowedIpsSpy = jest
        .spyOn(guard as any, 'getAllowedIps')
        .mockReturnValue([]);

      expect(guard.canActivate(context)).toBeFalsy();
      expect(getAllowedIpsSpy).toBeCalledWith(context);
    });

    it('should return false if IP is not in allowlist', () => {
      request.ip = '167.19.78.14';
      (guard as any).options = {
        debug: false,
      };

      const getAllowedIpsSpy = jest
        .spyOn(guard as any, 'getAllowedIps')
        .mockReturnValue(['127.0.0.1', '197.0.10.15']);

      expect(guard.canActivate(context)).toBeFalsy();
      expect(getAllowedIpsSpy).toBeCalledWith(context);
    });

    it('should return true if IP in allowlist', () => {
      (guard as any).options = {
        debug: false,
      };

      const getAllowedIpsSpy = jest
        .spyOn(guard as any, 'getAllowedIps')
        .mockReturnValue(['127.0.0.1', '197.0.10.15', request.ip]);

      expect(guard.canActivate(context)).toBeTruthy();
      expect(getAllowedIpsSpy).toBeCalledWith(context);
    });

    it('should return true if IP in one of allowlist ranges', () => {
      request.ip = '178.176.72.59';
      (guard as any).options = {
        debug: false,
      };

      const getAllowedIpsSpy = jest
        .spyOn(guard as any, 'getAllowedIps')
        .mockReturnValue(['127.0.0.1', '197.0.10.15', '178.176.72.0/24']);

      expect(guard.canActivate(context)).toBeTruthy();
      expect(getAllowedIpsSpy).toBeCalledWith(context);
    });
  });

  describe('getAllowedIps', () => {
    let context: ExecutionContext;

    beforeEach(() => {
      context = {
        getClass: jest.fn(),
        getHandler: jest.fn(),
      } as any;
    });

    it('should return ips from meta without ips from settings if meta provided', () => {
      const ips = [
        faker.internet.ip(),
        faker.internet.ip(),
      ];
      (guard as any).options = {
        debug: false,
        allowedIps: ['127.0.0.1'],
      };

      const getSpy = jest
        .spyOn(reflector, 'get')
        .mockReturnValue(ips);

      expect((guard as any).getAllowedIps(context)).toEqual([...ips, ...ips]);

      expect(context.getClass).toBeCalledTimes(1);
      expect(context.getHandler).toBeCalledTimes(1);

      expect(getSpy).toBeCalledTimes(2);
      expect(getSpy).toBeCalledWith(IP_ALLOWLIST, undefined);
      expect(getSpy).toBeCalledWith(IP_ALLOWLIST, undefined);
    });

    describe.each([
      [[]],
      [undefined],
    ])('ips: %o', (ips: string[]) => {
      it('should return ips from settings if no meta provided', () => {
        (guard as any).options = {
          debug: false,
          allowedIps: ['127.0.0.1'],
        };

        const getSpy = jest
          .spyOn(reflector, 'get')
          .mockReturnValue(ips);

        expect((guard as any).getAllowedIps(context)).toEqual(['127.0.0.1']);

        expect(context.getClass).toBeCalledTimes(1);
        expect(context.getHandler).toBeCalledTimes(1);

        expect(getSpy).toBeCalledTimes(2);
        expect(getSpy).toBeCalledWith(IP_ALLOWLIST, undefined);
        expect(getSpy).toBeCalledWith(IP_ALLOWLIST, undefined);
      });
    });
  });
});
