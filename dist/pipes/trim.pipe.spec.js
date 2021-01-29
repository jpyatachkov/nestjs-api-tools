"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const trim_pipe_1 = require("./trim.pipe");
describe('TrimPipe', () => {
    let pipe;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                trim_pipe_1.TrimPipe,
            ],
        }).compile();
        pipe = module.get(trim_pipe_1.TrimPipe);
    });
    it('should be defined', () => {
        expect(pipe).toBeDefined();
    });
    describe('transform', () => {
        let metadata;
        let value;
        beforeEach(() => {
            metadata = {};
            value = {};
        });
        describe.each([
            [12],
            ['string'],
            [true],
            [null],
            [undefined],
        ])('value: %o', (value) => {
            it('should do nothing if the request body does not contain object', () => {
                const trimSpy = jest
                    .spyOn(pipe, 'trim')
                    .mockImplementation(x => x);
                pipe.transform(value, metadata);
                expect(trimSpy).not.toBeCalled();
            });
        });
        it('should do nothing if the metadata type is not request body', () => {
            metadata.type = 'query';
            const trimSpy = jest
                .spyOn(pipe, 'trim')
                .mockImplementation(x => x);
            pipe.transform(value, metadata);
            expect(trimSpy).not.toBeCalled();
        });
        it('should call trim method', () => {
            metadata.type = 'body';
            const trimSpy = jest
                .spyOn(pipe, 'trim')
                .mockImplementation(x => x);
            pipe.transform(value, metadata);
            expect(trimSpy).toBeCalledWith(value);
        });
    });
    describe('trim', () => {
        it('should not fail on empty object', () => {
            expect(pipe.trim({})).toEqual({});
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
        ])('object: %o, expected: %o', (object, expected) => {
            it('should trim with respect to recursion depth', () => {
                expect(pipe.trim(object)).toEqual(expected);
            });
        });
    });
});
//# sourceMappingURL=trim.pipe.spec.js.map