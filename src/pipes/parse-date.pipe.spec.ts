import {Test, TestingModule} from '@nestjs/testing';

import {ParseDatePipe} from './parse-date.pipe';
import faker from 'faker';

describe('ParseDatePipe', () => {
  let pipe: ParseDatePipe;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ParseDatePipe,
      ],
    }).compile();

    pipe = module.get<ParseDatePipe>(ParseDatePipe);
  });

  it('should be defined', () => {
    expect(pipe).toBeDefined();
  });

  describe('transform', () => {
    it('should transform string to date', () => {
      const dateString = '2020-01-01';
      const expected = new Date(dateString);
      expect(pipe.transform(dateString)).toEqual(expected);
    });

    it('should return NaN if string is not date', () => {
      expect(pipe.transform(faker.random.word())).toBeNaN();
    });
  });
});
