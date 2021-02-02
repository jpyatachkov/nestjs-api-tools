# Decorators

The module provides both documentation and utility decorators.

Documentation decorators aims to document the controller methods documenting. They provide a wrapper over [@nestjs/swagger](https://docs.nestjs.com/openapi/introduction)
decorators and allow one not to combine existing decorators manually (for example, when providing POST request, it's normally desirable to show 400 Bad Request possible error in Swagger,
so why should you do it in multiple pieces of code manually?). To sum up, this set of decorators includes response status decorators and request
parameter decorators (such as page, size, offset, limit). To see full set of decorators available, please refer to the [decorators/api module](src/decorators/api) - the file names speak for themselves.

Utility decorators do some helpful operations such as wrapping request parameters.

## API decorators

TODO

## ORM decorators

TODO

## Transform decorators

The set of decorators to transform values during JSON serialization.

### AsDate

Transforms timestamp, date or datetime to ISO 8601 date string. Example:

```ts
class SomeEntity {
  @AsDate()
  public birthDate: DateTime;
}
```

### AsDateTime

Transforms timestamp, date or datetime to ISO 8601 datetime string. Example:

```ts
class SomeEntity {
  @AsDateTime()
  public birthDate: DateTime;
}
```

## Validation decorators

### BodyWithTrim

Trims spaces from string values in request body. Example:

```ts
@Controller()
export class ExampleController {
  @TrimPipe()
  public async foo(@Body() data: AnyDto) {}
}
```

If you want to use `@BodyWithValidation`, do the following:

```ts
@Controller()
export class ExampleController {
  @TrimPipe()
  public async foo(@BodyWithValidation() data: AnyDto) {}
}
```

### BodyWithValidation

Applies NestJS ValidationPipe to request data. Example:

```ts
@Controller()
export class ExampleController {
  public async foo(@BodyWithValidation() data: AnyDto) {}
}
```

If you want to use `TrimPipe`, do the following:

```ts
@Controller()
export class ExampleController {
  @TrimPipe()
  public async foo(@BodyWithValidation() data: AnyDto) {}
}
```

### IsNotNull

Checks wheather value provided is not strictly equal to null. **Undefined is acceptable!** Example:

```ts
class SomeDto {
  @IsNotNull()
  public readonly notNullField: unknown;
}
```

## Other decorators

### @Limit

Limit query parameter - used to find and parse as number the query parameter containing pagination limit. Example:

```ts
@Controller()
export class ExampleController {
  public async foo(@Limit({ defaultLimit: 25 }) limit: number) {}
}
```

You can use the decorator without parameters object at all (i.e. `@Limit()`). Available parameters are the following:

```ts
export interface LimitOptions {
  defaultLimit: number; // The value which will be used if no limit query parameter provided. Default is 25.
  limitParam: string; // The name of the query parameter. Default is 'limit'.
  maxLimit: number; // Maximum possible value for the parameter. If the higher value will be passed, it will be changed to maxLimit. Default is 500.
}
```

### @Offset

Offset query parameter - used to find and parse as number the query parameter containing pagination offset. Example:

```ts
@Controller()
export class ExampleController {
  public async foo(@Offset({ defaultOffset: 0 }) offset: number) {}
}
```

You can use the decorator without parameters object at all (i.e. `@Offset()`). Available parameters are the following:

```ts
export interface OffsetOptions {
  defaultOffset: number; // The value which will be used if no offset query parameter provided. Default is 0.
  offsetParam: string; // The name of the query parameter. Default is 'offset'.
}
```

### @Page

Page (**from 1**) query parameter - used to find and parse as number the query parameter containing page. Example:

```ts
@Controller()
export class ExampleController {
  public async foo(@Page({ defaultPage: 1 }) page: number) {}
}
```

You can use the decorator without parameters object at all (i.e. `@Page()`). Available parameters are the following:

```ts
export interface PageOptions {
  defaultPage: number; // The value which will be used if no page query parameter provided. Default is 1.
  pageParam: string; // The name of the query parameter. Default is 'page'.
}
```

### @Serialization

The decorator which enforces NestJS to use [class-transformer](https://github.com/typestack/class-transformer) when returning objects from
controllers. Example:

```ts
@Controller()
@Serialization()
export class ExampleController {}
```

**Pay attention** that the class-transformer package does not serialize plain objects as they don't have metadata, so when you have

```ts
export class User {
  @ApiProperty()
  public nick: string;

  @Exclude()
  public password: string;
}
```

and do something like

```ts
const user = new User();
const transformed = { ...user };
```

You loose all metadata, thus class-transformer will not work correctly.

### @Size

Size query parameter - used to find and parse as number the query parameter containing page size. Example:

```ts
@Controller()
export class ExampleController {
  public async foo(@Size({ defaultSize: 25 }) size: number) {}
}
```

You can use the decorator without parameters object at all (i.e. `@Size()`). Available parameters are the following:

```ts
export interface SizeOptions {
  defaultSize: number; // The value which will be used if no size query parameter provided. Default is 100.
  maxSize: string; // Maximum possible value for the parameter. If the higher value will be passed, it will be changed to maxLimit. Default is 500.
  sizeParam: number; // The name of the query parameter. Default is 'size'.
}
```
