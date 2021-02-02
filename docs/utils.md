# Utils

Set of functions for transformations.

## datetime

The [Luxon datetime package](https://moment.github.io/luxon/) is useful for date and time transformations, so this module provides wrappers to interact with it:

- `parseDateTime` - tries to construct `Luxon.DateTime` from input and returns it or null.

## pagination

Module to transform between different pagination representations. For example:

- `pageAndSizeToSkipAndTake` - transforms page and size to skip and take (SQL offset and limit synonyms).

## replacer

Module to remove unwanted properties from objects. Useful for logging - some properties can be very long and useless at the same time.

- `createJsonReplacer` - creates replacer argument for `JSON.stringify`.
- `replacer` - removes unwanted properties from object.

## string

Strings transformations. For example:

- `capitalize` - makes first letter in string capital.
- `joinStrings` - joins array of strings with the delimiter passed and **ensures the delimiter not to repeat on boundaries**. For instance, `joinStrings('/', 'a/', '/b')` will return `a/b`.
- `isEmpty` - checks whether string has zero length excluding spaces.
