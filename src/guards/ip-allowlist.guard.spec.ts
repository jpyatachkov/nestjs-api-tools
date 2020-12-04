import {Test, TestingModule} from '@nestjs/testing';

import {ExecutionContext} from '@nestjs/common';
import {IP_ALLOWLIST_GUARD_OPTIONS} from '../constants';
import {IpAllowlistGuard} from './ip-allowlist.guard';
import {Request} from 'express';
import faker from 'faker';

describe('IpAllowlistGuard', () => {
  let guard: IpAllowlistGuard;

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
      ],
    }).compile();

    guard = module.get(IpAllowlistGuard);
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
        allowedIps: [],
      };
      expect(guard.canActivate(context)).toBeFalsy();
    });

    it('should return false if IP is not in allowlist', () => {
      request.ip = '167.19.78.14';
      (guard as any).options = {
        debug: false,
        allowedIps: ['127.0.0.1', '197.0.10.15'],
      };
      expect(guard.canActivate(context)).toBeFalsy();
    });

    it('should return true if IP in allowlist', () => {
      (guard as any).options = {
        debug: false,
        allowedIps: ['127.0.0.1', '197.0.10.15', request.ip],
      };
      expect(guard.canActivate(context)).toBeTruthy();
    });

    it('should return true if IP in one of allowlist ranges', () => {
      request.ip = '178.176.72.59';
      (guard as any).options = {
        debug: false,
        allowedIps: ['127.0.0.1', '197.0.10.15', '178.176.72.0/24'],
      };
      expect(guard.canActivate(context)).toBeTruthy();
    });
  });
});
