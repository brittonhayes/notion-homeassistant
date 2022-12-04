[notion-homeassistant](../README.md) / [Exports](../modules.md) / ClientProperties

# Interface: ClientProperties

Home Assistant API client properties

**`Example`**

```ts
{ baseUrl: "http://localhost:8123", token: process.env.HA_TOKEN }
```

## Table of contents

### Properties

- [baseUrl](ClientProperties.md#baseurl)
- [debug](ClientProperties.md#debug)
- [token](ClientProperties.md#token)

## Properties

### baseUrl

• `Optional` **baseUrl**: `string`

The base URL of the Home Assistant instance

**`Default`**

"http://localhost:8123"

#### Defined in

[src/homeassistant/client.ts:18](https://github.com/brittonhayes/notion-homeassistant/blob/4812015/src/homeassistant/client.ts#L18)

___

### debug

• `Optional` **debug**: `boolean`

Enable debug logging

**`Default`**

false

#### Defined in

[src/homeassistant/client.ts:30](https://github.com/brittonhayes/notion-homeassistant/blob/4812015/src/homeassistant/client.ts#L30)

___

### token

• `Optional` **token**: `string`

The Home Assistant API token

#### Defined in

[src/homeassistant/client.ts:23](https://github.com/brittonhayes/notion-homeassistant/blob/4812015/src/homeassistant/client.ts#L23)
