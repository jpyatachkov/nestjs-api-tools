import {IsBoolean, IsInt} from 'class-validator';

export class Cache {

  @IsInt()
  public ttl: number;

  @IsBoolean()
  public useClones: boolean;
}
