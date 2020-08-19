# NestJS API tools

This project provides a set of tools and wrappers for convenient API development. Since convenience is a controversial issue, using this package may not increase your development performance.
The main aim of creation of such a package is to integrate and isolate all utilities commonly used in recent projects.

Russian language used in string default values because of local type of development - this is the most convenient way of development. 

## Tools

The set of tools is the following:

* Decorators - [@nestjs/swagger](https://docs.nestjs.com/openapi/introduction) wrappers, validation, pagination, serialization wrappers.
* Caching service - [node-cache](https://www.npmjs.com/package/node-cache) wrapper.
* Discord service - injetable to send messages (error messages, for example) to discord channel.
* Pipes - extended validation pipe with error translation, date parsing pipe.
* Guards - guard for IP whitelisting.
