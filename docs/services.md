# Services

The package provides a set of reusable services.

## CacheService

Simple in-memory cache. Has three methods: `has`, `get`, `set`. The `set` method saves value with global TTL by default, but you can provide a unique TTL in seconds as a second argument.

To make it work provide the configuration options through the NestJS DI:

```ts
import {CACHE_SERVICE_OPTIONS} from './constants';

//..

{
  provide: CACHE_SERVICE_OPTIONS,
  useValue: {
    ttl: 60, // Default cache value TTL in seconds.
    useClones: false, // Clone values when setting to cache or not.
  },
}
```

## DiscordService

Service to send Discord messages, especially for error logging.

To make it work provide the configuration options through the NestJS DI:

```ts
import {DISCORD_SERVICE_OPTIONS} from './constants';

//..

{
  provide: DISCORD_SERVICE_OPTIONS,
  useValue: {
    debug: false, // Should be global app debug flag to distinguish production environment messages from stage or local messages, if all these envs are connected to the same discord channel.
    domain: '', // Application domain - used for the same purposes as the debug flag.
    id: '', // Discord API ID.
    token: '', // Discord API token.
  },
}
```

Use this service as following:

```ts
import { nanoid } from "nanoid";

// This token will help to match Discord logs with text logs.
// You should generate it manually every time you need to send something to Discord to pass it in all parts of your logging system.
// If possible, it should be unique or at least rarely recurring, good case for nanoid package https://github.com/ai/nanoid
const logToken = nanoid();

// Discord logging context. Feel free to skip this property or pass empty object.
// This is an extra data for logging organized as following:
// {
//   entity1: {
//     id: 11,
//     guid: 'UUID',
//     discordNotifyText: 'anything you want',
//   },
//   entity2: {
//     id: 11,
//     guid: 'UUID',
//     discordNotifyText: 'anything you want',
//   },
//   ...
// },
const context = {};

this.discordService.emitError(
  "ERROR_ALIAS",
  logToken,
  "POST", // HTTP method. You can set it to null if no method used (it's not HTTP service) or the method does not matter.
  "/api/v1/example", // HTTP path. Also nullish.
  context
);
```
