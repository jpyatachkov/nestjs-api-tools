# Pipes

Couple of useful pipes for data parsing and transformations.

## ParseDatePipe

Checks whether given string can be treated as date, if so, creates `Date` from it, otherwise returns `null`. Example:

```ts
@Controller()
export class ExampleController {
  public async foo(@Param("dateFrom", ParseDatePipe) dateFrom: Date) {}
}
```

## TrimPipe

Pipe that trims strings (nested strings too). It can be used through `@BodyWithTrim()` decorator:

```ts
@Controller()
export class ExampleController {
  @BodyWithTrim()
  public async createTask(@BodyWithValidation() data: AnyDto) {}
}
```
