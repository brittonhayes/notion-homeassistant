[notion-homeassistant](../README.md) / Client

# Class: Client

Home Assistant API Client

## Table of contents

### Constructors

- [constructor](Client.md#constructor)

### Properties

- [client](Client.md#client)
- [config](Client.md#config)
- [health](Client.md#health)
- [services](Client.md#services)

## Constructors

### constructor

• **new Client**(`properties`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties` | [`ClientProperties`](../interfaces/ClientProperties.md) | Home Assistant client connection properties |

#### Defined in

[src/homeassistant/client.ts:44](https://github.com/brittonhayes/notion-homeassistant/blob/a98ac0d/src/homeassistant/client.ts#L44)

## Properties

### client

• `Private` `Readonly` **client**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `configure` | (`config`: `FetchConfig`) => `void` |
| `path` | <P\>(`path`: `P`) => { `method`: <M\>(`method`: `M`) => { `create`: `CreateFetch`<`M`, [`paths`](../interfaces/paths.md)[`P`][`M`]\>  }  } |
| `use` | (`mw`: `Middleware`) => `number` |

#### Defined in

[src/homeassistant/client.ts:37](https://github.com/brittonhayes/notion-homeassistant/blob/a98ac0d/src/homeassistant/client.ts#L37)

___

### config

• `Readonly` **config**: `Object`

Home Assistant configuration

#### Type declaration

| Name | Type |
| :------ | :------ |
| `retrieve` | () => `Promise`<{ `data`: { `components?`: `string`[] ; `config_dir?`: `string` ; `elevation?`: `number` ; `latitude?`: `number` ; `location_name?`: `string` ; `longitude?`: `number` ; `time_zone?`: `string` ; `unit_system?`: { `length?`: `string` ; `mass?`: `string` ; `pressure?`: `string` ; `temperature?`: `string` ; `volume?`: `string`  } ; `version?`: `string` ; `whitelist_external_dirs?`: `string`[]  } ; `status`: `number`  }\> |

#### Defined in

[src/homeassistant/client.ts:77](https://github.com/brittonhayes/notion-homeassistant/blob/a98ac0d/src/homeassistant/client.ts#L77)

___

### health

• `Readonly` **health**: `Object`

API health endpoints

#### Type declaration

| Name | Type |
| :------ | :------ |
| `retrieve` | () => `Promise`<{ `data`: { `message?`: `string`  } ; `status`: `number`  }\> |

#### Defined in

[src/homeassistant/client.ts:61](https://github.com/brittonhayes/notion-homeassistant/blob/a98ac0d/src/homeassistant/client.ts#L61)

___

### services

• `Readonly` **services**: `Object`

Home Assistant services endpoint

#### Type declaration

| Name | Type |
| :------ | :------ |
| `list` | () => `Promise`<{ `data`: { `domain?`: `string` ; `services?`: { `description?`: `string` ; `fields?`: `Record`<`string`, `never`\> ; `name?`: `string` ; `target?`: `Record`<`string`, `never`\>  }[]  }[] ; `status`: `number`  }\> |

#### Defined in

[src/homeassistant/client.ts:93](https://github.com/brittonhayes/notion-homeassistant/blob/a98ac0d/src/homeassistant/client.ts#L93)
