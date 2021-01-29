import {Test, TestingModule} from '@nestjs/testing';

import {ArgumentMetadata} from '@nestjs/common';
import {TrimPipe} from './trim.pipe';

describe('TrimPipe', () => {
  let pipe: TrimPipe;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TrimPipe,
      ],
    }).compile();

    pipe = module.get(TrimPipe);
  });

  it('should be defined', () => {
    expect(pipe).toBeDefined();
  });

  describe('transform', () => {
    let metadata: ArgumentMetadata;
    let value: unknown;

    beforeEach(() => {
      metadata = {} as any;
      value = {} as any;
    });

    describe.each([
      [12],
      ['string'],
      [true],
      [null],
      [undefined],
    ])('value: %o', (value: unknown) => {
      it('should do nothing if the request body does not contain object', () => {
        const trimSpy = jest
          .spyOn(pipe as any, 'trim')
          .mockImplementation(x => x);

        pipe.transform(value, metadata);

        expect(trimSpy).not.toBeCalled();
      });
    });

    it('should do nothing if the metadata type is not request body', () => {
      (metadata as any).type = 'query';

      const trimSpy = jest
        .spyOn(pipe as any, 'trim')
        .mockImplementation(x => x);

      pipe.transform(value, metadata);

      expect(trimSpy).not.toBeCalled();
    });

    it('should call trim method', () => {
      (metadata as any).type = 'body';

      const trimSpy = jest
        .spyOn(pipe as any, 'trim')
        .mockImplementation(x => x);

      pipe.transform(value, metadata);

      expect(trimSpy).toBeCalledWith(value);
    });
  });

  describe('trim', () => {
    it('should not fail on empty object', () => {
      expect((pipe as any).trim({})).toEqual({});
    });

    describe.each([
      [
        {
          first: '   aaa a aa   aa  ',
          second: '   aaa a aa   aa',
          third: 'aaa a aa   aa  ',
          correct: 'aaqw23a a 56aa &&853!!  aa',
        },
        {
          first: 'aaa a aa   aa',
          second: 'aaa a aa   aa',
          third: 'aaa a aa   aa',
          correct: 'aaqw23a a 56aa &&853!!  aa',
        },
      ],
      [
        {
          a: '   a ',
          b: {
            c: 10,
            d: null,
            e: undefined,
            f: true,
            g: [1, 2, 'df', '   a   '],
            h: {
              foo: 'bar',
            },
          },
        },
        {
          a: 'a',
          b: {
            c: 10,
            d: null,
            e: undefined,
            f: true,
            g: [1, 2, 'df', 'a'],
            h: {
              foo: 'bar',
            },
          },
        },
      ],
      [
        {
          a: ' a',
          inner: {
            b: ' b',
            inner: {
              c: ' c',
              inner: {
                d: ' d',
                inner: {
                  e: ' e',
                  inner: {
                    f: ' f',
                    inner: {
                      g: ' g',
                      inner: {
                        h: ' h',
                        inner: {
                          i: ' i',
                          inner: {
                            j: ' j',
                            inner: {
                              k: ' k',
                              inner: {
                                notTouched: '  sd  ',
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        {
          a: 'a',
          inner: {
            b: 'b',
            inner: {
              c: 'c',
              inner: {
                d: 'd',
                inner: {
                  e: 'e',
                  inner: {
                    f: 'f',
                    inner: {
                      g: 'g',
                      inner: {
                        h: 'h',
                        inner: {
                          i: 'i',
                          inner: {
                            j: 'j',
                            inner: {
                              k: 'k',
                              inner: {
                                notTouched: '  sd  ',
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      ],
    ])('object: %o, expected: %o', (object: Record<string, unknown>, expected: Record<string, unknown>) => {
      it('should trim with respect to recursion depth', () => {
        expect((pipe as any).trim(object)).toEqual(expected);
      });
    });
  });
});
