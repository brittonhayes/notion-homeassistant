[notion-homeassistant](../README.md) / Client

# Class: Client

Home Assistant API Client

## Table of contents

### Constructors

- [constructor](Client.md#constructor)

### Properties

- [calendar](Client.md#calendar)
- [client](Client.md#client)
- [config](Client.md#config)
- [errorlogs](Client.md#errorlogs)
- [events](Client.md#events)
- [health](Client.md#health)
- [logbook](Client.md#logbook)
- [services](Client.md#services)
- [states](Client.md#states)
- [template](Client.md#template)

## Constructors

### constructor

• **new Client**(`properties`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties` | [`ClientProperties`](../interfaces/ClientProperties.md) | Home Assistant client connection properties |

#### Defined in

[src/homeassistant/client.ts:44](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/client.ts#L44)

## Properties

### calendar

• `Readonly` **calendar**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `list` | () => `Promise`<{ `data`: { `calendar?`: `string` ; `entity_id?`: `string`  }[] ; `status`: `number`  }\> |
| `retrieve` | (`entityId`: `string`) => `Promise`<{ `data`: { `description?`: `string` ; `end?`: `Without`<{ `dateTime?`: `string`  }, { `date?`: `string`  }\> & { `date?`: `string`  } \| `Without`<{ `date?`: `string`  }, { `dateTime?`: `string`  }\> & { `dateTime?`: `string`  } ; `location?`: `string` ; `start?`: `Without`<{ `dateTime?`: `string`  }, { `date?`: `string`  }\> & { `date?`: `string`  } \| `Without`<{ `date?`: `string`  }, { `dateTime?`: `string`  }\> & { `dateTime?`: `string`  } ; `summary?`: `string`  }[] ; `status`: `number`  }\> |

#### Defined in

[src/homeassistant/client.ts:204](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/client.ts#L204)

___

### client

• `Private` `Readonly` **client**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `configure` | (`config`: `FetchConfig`) => `void` |
| `path` | <P\>(`path`: `P`) => { `method`: <M\>(`method`: `M`) => { `create`: `CreateFetch`<`M`, [`paths`](../interfaces/paths.md)[`P`][`M`]\>  }  } |
| `use` | (`mw`: `Middleware`) => `number` |

#### Defined in

[src/homeassistant/client.ts:37](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/client.ts#L37)

___

### config

• `Readonly` **config**: `Object`

Home Assistant configuration

#### Type declaration

| Name | Type |
| :------ | :------ |
| `retrieve` | () => `Promise`<{ `data`: { `components?`: `string`[] ; `config_dir?`: `string` ; `elevation?`: `number` ; `latitude?`: `number` ; `location_name?`: `string` ; `longitude?`: `number` ; `time_zone?`: `string` ; `unit_system?`: { `length?`: `string` ; `mass?`: `string` ; `pressure?`: `string` ; `temperature?`: `string` ; `volume?`: `string`  } ; `version?`: `string` ; `whitelist_external_dirs?`: `string`[]  } ; `status`: `number`  }\> |

#### Defined in

[src/homeassistant/client.ts:77](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/client.ts#L77)

___

### errorlogs

• `Readonly` **errorlogs**: `Object`

Home Assistant error logs endpoint

#### Type declaration

| Name | Type |
| :------ | :------ |
| `list` | () => `Promise`<{ `data`: `unknown` ; `status`: `number`  }\> |

#### Defined in

[src/homeassistant/client.ts:191](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/client.ts#L191)

___

### events

• `Readonly` **events**: `Object`

Home Assistant events endpoint

#### Type declaration

| Name | Type |
| :------ | :------ |
| `list` | () => `Promise`<{ `data`: { `event?`: `string` ; `listener_count?`: `Record`<`string`, `never`\>  }[] ; `status`: `number`  }\> |

#### Defined in

[src/homeassistant/client.ts:93](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/client.ts#L93)

___

### health

• `Readonly` **health**: `Object`

API health endpoints

#### Type declaration

| Name | Type |
| :------ | :------ |
| `retrieve` | () => `Promise`<{ `data`: { `message?`: `string`  } ; `status`: `number`  }\> |

#### Defined in

[src/homeassistant/client.ts:61](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/client.ts#L61)

___

### logbook

• `Readonly` **logbook**: `Object`

Home Assistant logbook endpoint

#### Type declaration

| Name | Type |
| :------ | :------ |
| `list` | (`timestamp?`: `string`) => `Promise`<{ `data`: { `context_user_id?`: `string` ; `domain?`: `string` ; `entity_id?`: `string` ; `message?`: `string` ; `name?`: `string` ; `when?`: `string`  }[] ; `status`: `number`  }\> |

#### Defined in

[src/homeassistant/client.ts:126](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/client.ts#L126)

___

### services

• `Readonly` **services**: `Object`

Home Assistant services endpoint

#### Type declaration

| Name | Type |
| :------ | :------ |
| `list` | () => `Promise`<{ `data`: { `domain?`: `string` ; `services?`: { `description?`: `string` ; `fields?`: `Record`<`string`, `never`\> ; `name?`: `string` ; `target?`: `Record`<`string`, `never`\>  }[]  }[] ; `status`: `number`  }\> |

#### Defined in

[src/homeassistant/client.ts:109](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/client.ts#L109)

___

### states

• `Readonly` **states**: `Object`

Home Assistant states endpoint

#### Type declaration

| Name | Type |
| :------ | :------ |
| `list` | () => `Promise`<{ `data`: { `attributes?`: `Record`<`string`, `never`\> ; `entity_id?`: `string` ; `last_changed?`: `string` ; `last_updated?`: `string` ; `state?`: `string`  }[] ; `status`: `number`  }\> |
| `retrieve` | (`entityId`: `string`) => `Promise`<{ `data`: { `attributes?`: `Record`<`string`, `never`\> ; `entity_id?`: `string` ; `last_changed?`: `string` ; `last_updated?`: `string` ; `state?`: `string`  } ; `status`: `number`  }\> |

#### Defined in

[src/homeassistant/client.ts:155](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/client.ts#L155)

___

### template

• `Readonly` **template**: `Object`

Home Assistant template rendering endpoint

#### Type declaration

| Name | Type |
| :------ | :------ |
| `render` | (`template`: `string`) => `Promise`<{ `data`: `unknown` ; `status`: `number`  }\> |

#### Defined in

[src/homeassistant/client.ts:232](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/client.ts#L232)
