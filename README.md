# NestJS API tools

This project provides a set of tools and wrappers for convenient API development. Since convenience is a controversial issue, using this package may not increase your development performance.
The main aim of creation of such a package is to integrate and isolate all utilities commonly used in recent projects.

Russian language used in string default values because of local type of development - this is the most convenient way of development. 

## Tools

The set of tools is the following:

* [Decorators](#decorators) - [@nestjs/swagger](https://docs.nestjs.com/openapi/introduction) wrappers, validation, pagination, serialization wrappers.
* [Errors](#errors) - exception classes to throw from API injectables.
* [Pipes](#pipes) - extended validation pipe with error translation, date parsing pipe.
* [Services](#services) - injectables for untility operations, for examples, to send messages (error messages, for example) to Discord channel.
* [Utils](#utils) - set of helpful functions.

### Decorators

The package provides both documentation and utility decorators.

Documentation decorators are aimed to be used for controller methods documenting. They provide a wrapper over [@nestjs/swagger](https://docs.nestjs.com/openapi/introduction)
decorators and allow one not to combine existing decorators manually (for example, when you provide POST request, you normally want to describe 400 Bad Request possible error,
so why should you do it in multiple pieces of code manually?). To sum up, this set of decorators includes response status decorators and request
parameter decorators (such as page, size, offset, limit). To see full set of decorators available, please refer to the [decorators/api module](src/decorators/api) - the file names speak for themselves.

Utility decorators are used for some helpful operations such as wrapping request parameters.

#### @Limit

Limit query parameter - used to find and parse as number the query parameter containing pagination limit. Example:

```ts
@Controller()
export class ExampleController {
  
  public async foo(@Limit({defaultLimit: 25}) limit: number) {  
  }
}
```

You can use the decorator without parameters object at all. Available parameters are the following:

```ts
export interface LimitOptions {
  defaultLimit: number; // The value which will be used if no limit query parameter provided. Default is 25.
  limitParam: string; // The name of the query parameter. Default is 'limit'.
  maxLimit: number; // Maximum possible value for the parameter. If the higher value will be passed, it will be changed to maxLimit. Default is 500.
}
```

#### @Offset

Offset query parameter - used to find and parse as number the query parameter containing pagination offset. Example:
                         
```ts
@Controller()
export class ExampleController {

  public async foo(@Offset({defaultOffset: 0}) offset: number) {  
  }
}
```

You can use the decorator without parameters object at all. Available parameters are the following:

```ts
export interface OffsetOptions {
  defaultOffset: number; // The value which will be used if no offset query parameter provided. Default is 0.
  offsetParam: string; // The name of the query parameter. Default is 'offset'.
}
```

#### @Page

Page (**from 1**) query parameter - used to find and parse as number the query parameter containing page. Example:
                         
```ts
@Controller()
export class ExampleController {

  public async foo(@Page() page: number) {  
  }
}
```

You can use the decorator without parameters object at all. Available parameters are the following:

```ts
export interface PageOptions {
  defaultPage: number; // The value which will be used if no page query parameter provided. Default is 1.
  pageParam: string; // The name of the query parameter. Default is 'page'.
}
```

#### @Serialization

The decorator which enforces NestJS to use [class-transformer](https://github.com/typestack/class-transformer) when returning objects from
controllers. Example: 

```ts
@Controller()
@Serialization()
export class ExampleController {
}
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
const beforeTransform = {...user};
```

You loose all metadata, thus class-transformer will not work correctly.

#### @Size

Size query parameter - used to find and parse as number the query parameter containing page size. Example:

```ts
@Controller()
export class ExampleController {
  
  public async foo(@Size({defaultSize: 25}) size: number) {  
  }
}
```

You can use the decorator without parameters object at all. Available parameters are the following:

```ts
export interface SizeOptions {
  defaultSize: number; // The value which will be used if no size query parameter provided. Default is 100.
  maxSize: string; // Maximum possible value for the parameter. If the higher value will be passed, it will be changed to maxLimit. Default is 500.
  sizeParam: number; // The name of the query parameter. Default is 'size'.
}
```
