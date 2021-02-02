# NestJS API tools

This project provides a set of operators, tools and wrappers for convenient API development using [NestJS](https://nestjs.com/). Since convenience is a controversial issue, this package may not increase your development performance. The main aim of creation of such a package is to integrate and isolate all utilities commonly used by me in recent projects.

Russian language used in string default values because of local type of development - all APIs must communicate with user at least in Russian, i18n is desirable, but not required.

## IMPORTANT NOTES

Due to breaking change in [`class-transformer` package from v 0.3.2](https://github.com/typestack/class-transformer) it's worth depending from strict 0.3.1 version when using this package, although it has fallbacks for both versions.

## Documentation

Documentation is still in progress. It is available under [docs directory of this repository](./docs).
