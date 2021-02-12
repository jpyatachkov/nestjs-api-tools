import {IsOptional, IsString} from 'class-validator';

export class Discord {

  @IsOptional()
  @IsString()
  public id?: string;

  @IsOptional()
  @IsString()
  public token?: string;
}
