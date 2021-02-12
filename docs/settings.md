# Settings

You can place settings in YAML files, deserialize it and use something like class-validator toensure formats are correct. This module provides settings for different api tools.

## Cache

Cache service settings:

```yaml
cache:
  # Cache time to live in minutes.
  ttl: 60
  # Clone object to cache or use the same reference.
  useClones: false
```

## Discord

Discord notification service settings:

```yaml
discord:
  # WebHook ID.
  id: "id"
  # WebHook token.
  token: "token"
```
