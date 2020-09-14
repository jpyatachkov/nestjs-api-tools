# NestJS API tools

This project provides a set of tools and wrappers for convenient API development. Since convenience is a controversial issue, using this package may not increase your development performance.
The main aim of creation of such a package is to integrate and isolate all utilities commonly used by me in recent projects.

Russian language used in string default values because of local type of development - all APIs must communicate with user at least in Russian, i18n is desirable but not required. 

## Tools

The set of tools is the following:

* [Decorators](#decorators) - [@nestjs/swagger](https://docs.nestjs.com/openapi/introduction) wrappers and validation, pagination, serialization wrappers.
* [Errors](#errors) - exception classes to throw from API injectables.
* [Pipes](#pipes) - extended validation pipe with error translation, date parsing pipe.
* [Services](#services) - injectables for utility operations, for example, sending messages (error messages least) to Discord channel.
* [Utils](#utils) - set of helpful functions for string, object transformations and so on.

### Decorators

The module provides both documentation and utility decorators.

Documentation decorators aims to document the controller methods documenting. They provide a wrapper over [@nestjs/swagger](https://docs.nestjs.com/openapi/introduction)
decorators and allow one not to combine existing decorators manually (for example, when providing POST request, it's normally desirable to show 400 Bad Request possible error in Swagger,
so why should you do it in multiple pieces of code manually?). To sum up, this set of decorators includes response status decorators and request
parameter decorators (such as page, size, offset, limit). To see full set of decorators available, please refer to the [decorators/api module](src/decorators/api) - the file names speak for themselves.

Utility decorators do some helpful operations such as wrapping request parameters.

#### @BodyWithValidation

Uses `ValidationPipe` with built-in whitelisting and errors i18n. Example:

```ts
@Controller()
export class ExampleController {
  
  public async foo(@BodyWithValidation() data: SomeDTO) {  
  }
}
```

#### @Limit

Limit query parameter - used to find and parse as number the query parameter containing pagination limit. Example:

```ts
@Controller()
export class ExampleController {
  
  public async foo(@Limit({defaultLimit: 25}) limit: number) {  
  }
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

#### @Offset

Offset query parameter - used to find and parse as number the query parameter containing pagination offset. Example:
                         
```ts
@Controller()
export class ExampleController {

  public async foo(@Offset({defaultOffset: 0}) offset: number) {  
  }
}
```

You can use the decorator without parameters object at all (i.e. `@Offset()`). Available parameters are the following:

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

  public async foo(@Page({defaultPage: 1}) page: number) {  
  }
}
```

You can use the decorator without parameters object at all (i.e. `@Page()`). Available parameters are the following:

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
const transformed = {...user};
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

You can use the decorator without parameters object at all (i.e. `@Size()`). Available parameters are the following:

```ts
export interface SizeOptions {
  defaultSize: number; // The value which will be used if no size query parameter provided. Default is 100.
  maxSize: string; // Maximum possible value for the parameter. If the higher value will be passed, it will be changed to maxLimit. Default is 500.
  sizeParam: number; // The name of the query parameter. Default is 'size'.
}
```

### Errors

Exception classes that can be used to transfer errors from business logic to the exception filter. This package provides several wrapper classes for most common HTTP statuses as
`400 Bad Request`, `409 Conflict` etc.

### Pipes

Couple of useful pipes for data transformation and validation.

#### ParseDatePipe

Checks whether given string can be treated as date, if so, creates `Date` from it, otherwise returns `null`. Example: 

```ts
@Controller()
export class ExampleController {
  
  public async foo(@Param('dateFrom', ParseDatePipe) dateFrom: Date) {  
  }
}
```

#### ValidationPipe

Re-written NestJS validation pipe. The main difference is that the `ValidationPipe` from this package tries to translate all class-validator messages.
So, this is the way to provide custom messages on many languages without uncomfortable data transformations.

To make it work, please, provide its configuration options through NestJS DI:

```ts
import {VALIDATION_PIPE_OPTIONS} from './constants';

//..

{
  provide: VALIDATION_PIPE_OPTIONS,
  value: {
    depth: 10, // Maximum depth of recursion while JSON error rendering.
  },
}
```

### Services

#### CacheService

Simple in-memory cache. Has three methods: `has`, `get`, `set`. `set` method by default saves value with global TTL, but you can provide unique TTL in seconds as a second argument.

To make it work, please, provide its configuration options through NestJS DI:

```ts
import {CACHE_SERVICE_OPTIONS} from './constants';

//..

{
  provide: CACHE_SERVICE_OPTIONS,
  value: {
    ttl: 60, // Default cache value TTL in seconds.
    useClones: false, // Clone values when setting to cache or not.
  },
}
```

#### DiscordService

Service to write Discord messages, especially for logging.

To make it work, please, provide its configuration options through NestJS DI:

```ts
import {DISCORD_SERVICE_OPTIONS} from './constants';

//..

{
  provide: DISCORD_SERVICE_OPTIONS,
  value: {
    debug: false; // Should be global app debug flag to distinguish production environment messages from stage or local messages, if all these envs are connected to the same discord channel.
    domain: ''; // Application domain - used for the same purposes as the debug flag.
    id: ''; // Discord API ID.
    token: ''; // Discord API token.
  },
}
```

### Utils

Set of functions for transformations.

#### pagination

Module to transform between different pagination representations. For example:

* `pageAndSizeToSkipAndTake` - transforms page and size to skip and take (SQL offset and limit synonyms).

#### replacer

Module to remove unwanted properties from objects. Useful for logging - some properties can be very long and useless at the same time.

#### string

Strings transformations. For example:

* `capitalize` - makes first letter in string capital.
* `joinStrings` - joins array of strings with the delimiter passed and **ensures the delimiter not to repeat on boundaries**. For instance, `joinStrings('/', 'a/', '/b')` will return `a/b`.
* `isEmpty` - checks whether string has zero length excluding spaces.
