[notion-homeassistant](../README.md) / paths

# Interface: paths

This file was auto-generated by openapi-typescript.
Do not make direct changes to the file.

## Table of contents

### Properties

- [/api/](paths.md#/api)
- [/api/config](paths.md#/api/config)
- [/api/events](paths.md#/api/events)
- [/api/services](paths.md#/api/services)

## Properties

### /api/

• **/api/**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `get` | { `responses`: { `200`: { `content`: { `application/json`: { `message?`: `string`  }  }  }  }  } | Returns a message if the API is up and running. **`Description`** Returns a message if the API is up and running. |
| `get.responses` | { `200`: { `content`: { `application/json`: { `message?`: `string`  }  }  }  } | Returns a message if the API is up and running. **`Description`** Returns a message if the API is up and running. |
| `get.responses.200` | { `content`: { `application/json`: { `message?`: `string`  }  }  } | **`Description`** Successful response |
| `get.responses.200.content` | { `application/json`: { `message?`: `string`  }  } | - |
| `get.responses.200.content.application/json` | { `message?`: `string`  } | - |
| `get.responses.200.content.application/json.message?` | `string` | **`Description`** The message returned by the API. |

#### Defined in

[src/homeassistant/schema.ts:7](https://github.com/brittonhayes/notion-homeassistant/blob/e751188/src/homeassistant/schema.ts#L7)

___

### /api/config

• **/api/config**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `get` | { `responses`: { `200`: { `content`: { `application/json`: { `components?`: `string`[] ; `config_dir?`: `string` ; `elevation?`: `number` ; `latitude?`: `number` ; `location_name?`: `string` ; `longitude?`: `number` ; `time_zone?`: `string` ; `unit_system?`: { `length?`: `string` ; `mass?`: `string` ; `pressure?`: `string` ; `temperature?`: `string` ; `volume?`: `string`  } ; `version?`: `string` ; `whitelist_external_dirs?`: `string`[]  }  }  }  }  } | Returns the configuration of the Home Assistant instance. **`Description`** Returns the configuration of the Home Assistant instance. |
| `get.responses` | { `200`: { `content`: { `application/json`: { `components?`: `string`[] ; `config_dir?`: `string` ; `elevation?`: `number` ; `latitude?`: `number` ; `location_name?`: `string` ; `longitude?`: `number` ; `time_zone?`: `string` ; `unit_system?`: { `length?`: `string` ; `mass?`: `string` ; `pressure?`: `string` ; `temperature?`: `string` ; `volume?`: `string`  } ; `version?`: `string` ; `whitelist_external_dirs?`: `string`[]  }  }  }  } | Returns the configuration of the Home Assistant instance. **`Description`** Returns the configuration of the Home Assistant instance. |
| `get.responses.200` | { `content`: { `application/json`: { `components?`: `string`[] ; `config_dir?`: `string` ; `elevation?`: `number` ; `latitude?`: `number` ; `location_name?`: `string` ; `longitude?`: `number` ; `time_zone?`: `string` ; `unit_system?`: { `length?`: `string` ; `mass?`: `string` ; `pressure?`: `string` ; `temperature?`: `string` ; `volume?`: `string`  } ; `version?`: `string` ; `whitelist_external_dirs?`: `string`[]  }  }  } | **`Description`** Successful response |
| `get.responses.200.content` | { `application/json`: { `components?`: `string`[] ; `config_dir?`: `string` ; `elevation?`: `number` ; `latitude?`: `number` ; `location_name?`: `string` ; `longitude?`: `number` ; `time_zone?`: `string` ; `unit_system?`: { `length?`: `string` ; `mass?`: `string` ; `pressure?`: `string` ; `temperature?`: `string` ; `volume?`: `string`  } ; `version?`: `string` ; `whitelist_external_dirs?`: `string`[]  }  } | - |
| `get.responses.200.content.application/json` | { `components?`: `string`[] ; `config_dir?`: `string` ; `elevation?`: `number` ; `latitude?`: `number` ; `location_name?`: `string` ; `longitude?`: `number` ; `time_zone?`: `string` ; `unit_system?`: { `length?`: `string` ; `mass?`: `string` ; `pressure?`: `string` ; `temperature?`: `string` ; `volume?`: `string`  } ; `version?`: `string` ; `whitelist_external_dirs?`: `string`[]  } | - |
| `get.responses.200.content.application/json.components?` | `string`[] | **`Description`** The components that are enabled in the Home Assistant instance. |
| `get.responses.200.content.application/json.config_dir?` | `string` | **`Description`** The directory where the Home Assistant configuration is stored. |
| `get.responses.200.content.application/json.elevation?` | `number` | **`Description`** The elevation of the Home Assistant instance. |
| `get.responses.200.content.application/json.latitude?` | `number` | **`Description`** The latitude of the Home Assistant instance. |
| `get.responses.200.content.application/json.location_name?` | `string` | **`Description`** The location name of the Home Assistant instance. |
| `get.responses.200.content.application/json.longitude?` | `number` | **`Description`** The longitude of the Home Assistant instance. |
| `get.responses.200.content.application/json.time_zone?` | `string` | **`Description`** The time zone of the Home Assistant instance. |
| `get.responses.200.content.application/json.unit_system?` | { `length?`: `string` ; `mass?`: `string` ; `pressure?`: `string` ; `temperature?`: `string` ; `volume?`: `string`  } | **`Description`** The unit system of the Home Assistant instance. |
| `get.responses.200.content.application/json.unit_system.length?` | `string` | **`Description`** The length unit of the Home Assistant instance. |
| `get.responses.200.content.application/json.unit_system.mass?` | `string` | **`Description`** The mass unit of the Home Assistant instance. |
| `get.responses.200.content.application/json.unit_system.pressure?` | `string` | **`Description`** The pressure unit of the Home Assistant instance. |
| `get.responses.200.content.application/json.unit_system.temperature?` | `string` | **`Description`** The temperature unit of the Home Assistant instance. |
| `get.responses.200.content.application/json.unit_system.volume?` | `string` | **`Description`** The volume unit of the Home Assistant instance. |
| `get.responses.200.content.application/json.version?` | `string` | **`Description`** The version of the Home Assistant instance. |
| `get.responses.200.content.application/json.whitelist_external_dirs?` | `string`[] | **`Description`** The external directories that are whitelisted in the Home Assistant instance. |

#### Defined in

[src/homeassistant/schema.ts:27](https://github.com/brittonhayes/notion-homeassistant/blob/e751188/src/homeassistant/schema.ts#L27)

___

### /api/events

• **/api/events**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `get` | { `responses`: { `200`: { `content`: { `application/json`: { `event?`: `string` ; `listener_count?`: `Record`<`string`, `never`\>  }[]  }  }  }  } | Returns an array of event objects. Each event object contains event name and listener count. **`Description`** Returns an array of event objects. Each event object contains event name and listener count. |
| `get.responses` | { `200`: { `content`: { `application/json`: { `event?`: `string` ; `listener_count?`: `Record`<`string`, `never`\>  }[]  }  }  } | Returns an array of event objects. Each event object contains event name and listener count. **`Description`** Returns an array of event objects. Each event object contains event name and listener count. |
| `get.responses.200` | { `content`: { `application/json`: { `event?`: `string` ; `listener_count?`: `Record`<`string`, `never`\>  }[]  }  } | **`Description`** Successful response |
| `get.responses.200.content` | { `application/json`: { `event?`: `string` ; `listener_count?`: `Record`<`string`, `never`\>  }[]  } | - |
| `get.responses.200.content.application/json` | { `event?`: `string` ; `listener_count?`: `Record`<`string`, `never`\>  }[] | - |

#### Defined in

[src/homeassistant/schema.ts:47](https://github.com/brittonhayes/notion-homeassistant/blob/e751188/src/homeassistant/schema.ts#L47)

___

### /api/services

• **/api/services**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `get` | { `responses`: { `200`: { `content`: { `application/json`: { `domain?`: `string` ; `services?`: `unknown`[]  }[]  }  }  }  } | Returns an array of service objects. Each service object contains domain, service name, and description. **`Description`** Returns an array of service objects. Each service object contains domain, service name, and description. |
| `get.responses` | { `200`: { `content`: { `application/json`: { `domain?`: `string` ; `services?`: `unknown`[]  }[]  }  }  } | Returns an array of service objects. Each service object contains domain, service name, and description. **`Description`** Returns an array of service objects. Each service object contains domain, service name, and description. |
| `get.responses.200` | { `content`: { `application/json`: { `domain?`: `string` ; `services?`: `unknown`[]  }[]  }  } | **`Description`** Successful response |
| `get.responses.200.content` | { `application/json`: { `domain?`: `string` ; `services?`: `unknown`[]  }[]  } | - |
| `get.responses.200.content.application/json` | { `domain?`: `string` ; `services?`: `unknown`[]  }[] | - |

#### Defined in

[src/homeassistant/schema.ts:67](https://github.com/brittonhayes/notion-homeassistant/blob/e751188/src/homeassistant/schema.ts#L67)