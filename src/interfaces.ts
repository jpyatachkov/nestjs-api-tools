import {ApiProperty} from '@nestjs/swagger';

export class ApiErrorResponse {

  @ApiProperty({
    description: 'HTTP-код ошибки, например 400 или 500',
    example: 403,
  })
  public readonly statusCode: number;

  @ApiProperty({
    description: 'Название ошибки - Bad Request, Internal Server Error',
    example: 'Forbidden',
  })
  public readonly error: string;

  @ApiProperty({
    description: 'Сообщение клиенту API',
    example: 'У Вас нет прав на выполнение этой операции',
  })
  public readonly message: string;
}
