[notion-homeassistant](../README.md) / paths

# Interface: paths

## Table of contents

### Properties

- [/api/](paths.md#/api)
- [/api/calendars](paths.md#/api/calendars)
- [/api/calendars/{entity\_id}](paths.md#/api/calendars/{entity_id})
- [/api/config](paths.md#/api/config)
- [/api/error\_log](paths.md#/api/error_log)
- [/api/events](paths.md#/api/events)
- [/api/logbook](paths.md#/api/logbook)
- [/api/logbook/{timestamp}](paths.md#/api/logbook/{timestamp})
- [/api/services](paths.md#/api/services)
- [/api/states](paths.md#/api/states)
- [/api/states/{entity\_id}](paths.md#/api/states/{entity_id})
- [/api/template](paths.md#/api/template)

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

[src/homeassistant/schema.ts:16](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/schema.ts#L16)

___

### /api/calendars

• **/api/calendars**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `get` | { `responses`: { `200`: { `content`: { `application/json`: { `calendar?`: `string` ; `entity_id?`: `string`  }[]  }  }  }  } | Returns an array of calendar objects. Each calendar object contains calendar name, and entity ID. **`Description`** Returns an array of calendar objects. Each calendar object contains calendar name, and entity ID. |
| `get.responses` | { `200`: { `content`: { `application/json`: { `calendar?`: `string` ; `entity_id?`: `string`  }[]  }  }  } | Returns an array of calendar objects. Each calendar object contains calendar name, and entity ID. **`Description`** Returns an array of calendar objects. Each calendar object contains calendar name, and entity ID. |
| `get.responses.200` | { `content`: { `application/json`: { `calendar?`: `string` ; `entity_id?`: `string`  }[]  }  } | **`Description`** Successful response |
| `get.responses.200.content` | { `application/json`: { `calendar?`: `string` ; `entity_id?`: `string`  }[]  } | - |
| `get.responses.200.content.application/json` | { `calendar?`: `string` ; `entity_id?`: `string`  }[] | - |

#### Defined in

[src/homeassistant/schema.ts:214](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/schema.ts#L214)

___

### /api/calendars/{entity\_id}

• **/api/calendars/{entity\_id}**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `get` | { `parameters`: { `path`: { `entity_id`: `string`  }  } ; `responses`: { `200`: { `content`: { `application/json`: { `description?`: `string` ; `end?`: `Without`<{ `dateTime?`: `string`  }, { `date?`: `string`  }\> & { `date?`: `string`  } \| `Without`<{ `date?`: `string`  }, { `dateTime?`: `string`  }\> & { `dateTime?`: `string`  } ; `location?`: `string` ; `start?`: `Without`<{ `dateTime?`: `string`  }, { `date?`: `string`  }\> & { `date?`: `string`  } \| `Without`<{ `date?`: `string`  }, { `dateTime?`: `string`  }\> & { `dateTime?`: `string`  } ; `summary?`: `string`  }[]  }  } ; `404`: { `content`: { `application/json`: { `message?`: `string`  }  }  }  }  } | Returns an array of calendar event objects for the specified entity ID. **`Description`** Returns an array of calendar event objects for the specified entity ID. |
| `get.parameters` | { `path`: { `entity_id`: `string`  }  } | Returns an array of calendar event objects for the specified entity ID. **`Description`** Returns an array of calendar event objects for the specified entity ID. |
| `get.parameters.path` | { `entity_id`: `string`  } | **`Description`** Entity ID |
| `get.parameters.path.entity_id` | `string` | - |
| `get.responses` | { `200`: { `content`: { `application/json`: { `description?`: `string` ; `end?`: `Without`<{ `dateTime?`: `string`  }, { `date?`: `string`  }\> & { `date?`: `string`  } \| `Without`<{ `date?`: `string`  }, { `dateTime?`: `string`  }\> & { `dateTime?`: `string`  } ; `location?`: `string` ; `start?`: `Without`<{ `dateTime?`: `string`  }, { `date?`: `string`  }\> & { `date?`: `string`  } \| `Without`<{ `date?`: `string`  }, { `dateTime?`: `string`  }\> & { `dateTime?`: `string`  } ; `summary?`: `string`  }[]  }  } ; `404`: { `content`: { `application/json`: { `message?`: `string`  }  }  }  } | - |
| `get.responses.200` | { `content`: { `application/json`: { `description?`: `string` ; `end?`: `Without`<{ `dateTime?`: `string`  }, { `date?`: `string`  }\> & { `date?`: `string`  } \| `Without`<{ `date?`: `string`  }, { `dateTime?`: `string`  }\> & { `dateTime?`: `string`  } ; `location?`: `string` ; `start?`: `Without`<{ `dateTime?`: `string`  }, { `date?`: `string`  }\> & { `date?`: `string`  } \| `Without`<{ `date?`: `string`  }, { `dateTime?`: `string`  }\> & { `dateTime?`: `string`  } ; `summary?`: `string`  }[]  }  } | **`Description`** Successful response |
| `get.responses.200.content` | { `application/json`: { `description?`: `string` ; `end?`: `Without`<{ `dateTime?`: `string`  }, { `date?`: `string`  }\> & { `date?`: `string`  } \| `Without`<{ `date?`: `string`  }, { `dateTime?`: `string`  }\> & { `dateTime?`: `string`  } ; `location?`: `string` ; `start?`: `Without`<{ `dateTime?`: `string`  }, { `date?`: `string`  }\> & { `date?`: `string`  } \| `Without`<{ `date?`: `string`  }, { `dateTime?`: `string`  }\> & { `dateTime?`: `string`  } ; `summary?`: `string`  }[]  } | - |
| `get.responses.200.content.application/json` | { `description?`: `string` ; `end?`: `Without`<{ `dateTime?`: `string`  }, { `date?`: `string`  }\> & { `date?`: `string`  } \| `Without`<{ `date?`: `string`  }, { `dateTime?`: `string`  }\> & { `dateTime?`: `string`  } ; `location?`: `string` ; `start?`: `Without`<{ `dateTime?`: `string`  }, { `date?`: `string`  }\> & { `date?`: `string`  } \| `Without`<{ `date?`: `string`  }, { `dateTime?`: `string`  }\> & { `dateTime?`: `string`  } ; `summary?`: `string`  }[] | - |
| `get.responses.404` | { `content`: { `application/json`: { `message?`: `string`  }  }  } | **`Description`** Entity not found |
| `get.responses.404.content` | { `application/json`: { `message?`: `string`  }  } | - |
| `get.responses.404.content.application/json` | { `message?`: `string`  } | - |
| `get.responses.404.content.application/json.message?` | `string` | **`Description`** The message returned by the API. |

#### Defined in

[src/homeassistant/schema.ts:234](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/schema.ts#L234)

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

[src/homeassistant/schema.ts:36](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/schema.ts#L36)

___

### /api/error\_log

• **/api/error\_log**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `get` | { `responses`: { `200`: { `content`: { `text/plain`: `string`  }  }  }  } | Returns an array of error logs in a plaintext response. **`Description`** Returns an array of error logs in a plaintext response. |
| `get.responses` | { `200`: { `content`: { `text/plain`: `string`  }  }  } | Returns an array of error logs in a plaintext response. **`Description`** Returns an array of error logs in a plaintext response. |
| `get.responses.200` | { `content`: { `text/plain`: `string`  }  } | **`Description`** Successful response |
| `get.responses.200.content` | { `text/plain`: `string`  } | - |
| `get.responses.200.content.text/plain` | `string` | - |

#### Defined in

[src/homeassistant/schema.ts:194](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/schema.ts#L194)

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

[src/homeassistant/schema.ts:56](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/schema.ts#L56)

___

### /api/logbook

• **/api/logbook**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `get` | { `responses`: { `200`: { `content`: { `application/json`: { `context_user_id?`: `string` ; `domain?`: `string` ; `entity_id?`: `string` ; `message?`: `string` ; `name?`: `string` ; `when?`: `string`  }[]  }  }  }  } | Returns an array of logbook objects. **`Description`** Returns an array of logbook objects. |
| `get.responses` | { `200`: { `content`: { `application/json`: { `context_user_id?`: `string` ; `domain?`: `string` ; `entity_id?`: `string` ; `message?`: `string` ; `name?`: `string` ; `when?`: `string`  }[]  }  }  } | Returns an array of logbook objects. **`Description`** Returns an array of logbook objects. |
| `get.responses.200` | { `content`: { `application/json`: { `context_user_id?`: `string` ; `domain?`: `string` ; `entity_id?`: `string` ; `message?`: `string` ; `name?`: `string` ; `when?`: `string`  }[]  }  } | **`Description`** Successful response |
| `get.responses.200.content` | { `application/json`: { `context_user_id?`: `string` ; `domain?`: `string` ; `entity_id?`: `string` ; `message?`: `string` ; `name?`: `string` ; `when?`: `string`  }[]  } | - |
| `get.responses.200.content.application/json` | { `context_user_id?`: `string` ; `domain?`: `string` ; `entity_id?`: `string` ; `message?`: `string` ; `name?`: `string` ; `when?`: `string`  }[] | - |

#### Defined in

[src/homeassistant/schema.ts:96](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/schema.ts#L96)

___

### /api/logbook/{timestamp}

• **/api/logbook/{timestamp}**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `get` | { `parameters`: { `path`: { `timestamp`: `string`  }  } ; `responses`: { `200`: { `content`: { `application/json`: { `context_user_id?`: `string` ; `domain?`: `string` ; `entity_id?`: `string` ; `message?`: `string` ; `name?`: `string` ; `when?`: `string`  }[]  }  }  }  } | Returns an array of logbook entries. **`Description`** Returns an array of logbook entries. |
| `get.parameters` | { `path`: { `timestamp`: `string`  }  } | Returns an array of logbook entries. **`Description`** Returns an array of logbook entries. |
| `get.parameters.path` | { `timestamp`: `string`  } | **`Description`** Timestamp in ISO 8601 format |
| `get.parameters.path.timestamp` | `string` | - |
| `get.responses` | { `200`: { `content`: { `application/json`: { `context_user_id?`: `string` ; `domain?`: `string` ; `entity_id?`: `string` ; `message?`: `string` ; `name?`: `string` ; `when?`: `string`  }[]  }  }  } | - |
| `get.responses.200` | { `content`: { `application/json`: { `context_user_id?`: `string` ; `domain?`: `string` ; `entity_id?`: `string` ; `message?`: `string` ; `name?`: `string` ; `when?`: `string`  }[]  }  } | **`Description`** Successful response |
| `get.responses.200.content` | { `application/json`: { `context_user_id?`: `string` ; `domain?`: `string` ; `entity_id?`: `string` ; `message?`: `string` ; `name?`: `string` ; `when?`: `string`  }[]  } | - |
| `get.responses.200.content.application/json` | { `context_user_id?`: `string` ; `domain?`: `string` ; `entity_id?`: `string` ; `message?`: `string` ; `name?`: `string` ; `when?`: `string`  }[] | - |

#### Defined in

[src/homeassistant/schema.ts:116](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/schema.ts#L116)

___

### /api/services

• **/api/services**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `get` | { `responses`: { `200`: { `content`: { `application/json`: { `domain?`: `string` ; `services?`: { `description?`: `string` ; `fields?`: `Record`<`string`, `never`\> ; `name?`: `string` ; `target?`: `Record`<`string`, `never`\>  }[]  }[]  }  }  }  } | Returns an array of service objects. Each service object contains domain, service name, and description. **`Description`** Returns an array of service objects. Each service object contains domain, service name, and description. |
| `get.responses` | { `200`: { `content`: { `application/json`: { `domain?`: `string` ; `services?`: { `description?`: `string` ; `fields?`: `Record`<`string`, `never`\> ; `name?`: `string` ; `target?`: `Record`<`string`, `never`\>  }[]  }[]  }  }  } | Returns an array of service objects. Each service object contains domain, service name, and description. **`Description`** Returns an array of service objects. Each service object contains domain, service name, and description. |
| `get.responses.200` | { `content`: { `application/json`: { `domain?`: `string` ; `services?`: { `description?`: `string` ; `fields?`: `Record`<`string`, `never`\> ; `name?`: `string` ; `target?`: `Record`<`string`, `never`\>  }[]  }[]  }  } | **`Description`** Successful response |
| `get.responses.200.content` | { `application/json`: { `domain?`: `string` ; `services?`: { `description?`: `string` ; `fields?`: `Record`<`string`, `never`\> ; `name?`: `string` ; `target?`: `Record`<`string`, `never`\>  }[]  }[]  } | - |
| `get.responses.200.content.application/json` | { `domain?`: `string` ; `services?`: { `description?`: `string` ; `fields?`: `Record`<`string`, `never`\> ; `name?`: `string` ; `target?`: `Record`<`string`, `never`\>  }[]  }[] | - |

#### Defined in

[src/homeassistant/schema.ts:76](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/schema.ts#L76)

___

### /api/states

• **/api/states**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `get` | { `responses`: { `200`: { `content`: { `application/json`: { `attributes?`: `Record`<`string`, `never`\> ; `entity_id?`: `string` ; `last_changed?`: `string` ; `last_updated?`: `string` ; `state?`: `string`  }[]  }  }  }  } | Returns an array of state objects. Each state object contains entity ID, state, and attributes. **`Description`** Returns an array of state objects. Each state object contains entity ID, state, and attributes. |
| `get.responses` | { `200`: { `content`: { `application/json`: { `attributes?`: `Record`<`string`, `never`\> ; `entity_id?`: `string` ; `last_changed?`: `string` ; `last_updated?`: `string` ; `state?`: `string`  }[]  }  }  } | Returns an array of state objects. Each state object contains entity ID, state, and attributes. **`Description`** Returns an array of state objects. Each state object contains entity ID, state, and attributes. |
| `get.responses.200` | { `content`: { `application/json`: { `attributes?`: `Record`<`string`, `never`\> ; `entity_id?`: `string` ; `last_changed?`: `string` ; `last_updated?`: `string` ; `state?`: `string`  }[]  }  } | **`Description`** Successful response |
| `get.responses.200.content` | { `application/json`: { `attributes?`: `Record`<`string`, `never`\> ; `entity_id?`: `string` ; `last_changed?`: `string` ; `last_updated?`: `string` ; `state?`: `string`  }[]  } | - |
| `get.responses.200.content.application/json` | { `attributes?`: `Record`<`string`, `never`\> ; `entity_id?`: `string` ; `last_changed?`: `string` ; `last_updated?`: `string` ; `state?`: `string`  }[] | - |

#### Defined in

[src/homeassistant/schema.ts:142](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/schema.ts#L142)

___

### /api/states/{entity\_id}

• **/api/states/{entity\_id}**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `get` | { `parameters`: { `path`: { `entity_id`: `string`  }  } ; `responses`: { `200`: { `content`: { `application/json`: { `attributes?`: `Record`<`string`, `never`\> ; `entity_id?`: `string` ; `last_changed?`: `string` ; `last_updated?`: `string` ; `state?`: `string`  }  }  } ; `404`: { `content`: { `application/json`: { `message?`: `string`  }  }  }  }  } | Returns a state object for the specified entity ID. **`Description`** Returns a state object for the specified entity ID. |
| `get.parameters` | { `path`: { `entity_id`: `string`  }  } | Returns a state object for the specified entity ID. **`Description`** Returns a state object for the specified entity ID. |
| `get.parameters.path` | { `entity_id`: `string`  } | **`Description`** Entity ID |
| `get.parameters.path.entity_id` | `string` | - |
| `get.responses` | { `200`: { `content`: { `application/json`: { `attributes?`: `Record`<`string`, `never`\> ; `entity_id?`: `string` ; `last_changed?`: `string` ; `last_updated?`: `string` ; `state?`: `string`  }  }  } ; `404`: { `content`: { `application/json`: { `message?`: `string`  }  }  }  } | - |
| `get.responses.200` | { `content`: { `application/json`: { `attributes?`: `Record`<`string`, `never`\> ; `entity_id?`: `string` ; `last_changed?`: `string` ; `last_updated?`: `string` ; `state?`: `string`  }  }  } | **`Description`** Successful response |
| `get.responses.200.content` | { `application/json`: { `attributes?`: `Record`<`string`, `never`\> ; `entity_id?`: `string` ; `last_changed?`: `string` ; `last_updated?`: `string` ; `state?`: `string`  }  } | - |
| `get.responses.200.content.application/json` | { `attributes?`: `Record`<`string`, `never`\> ; `entity_id?`: `string` ; `last_changed?`: `string` ; `last_updated?`: `string` ; `state?`: `string`  } | - |
| `get.responses.200.content.application/json.attributes?` | `Record`<`string`, `never`\> | **`Description`** The attributes of the state. |
| `get.responses.200.content.application/json.entity_id?` | `string` | **`Description`** The entity ID of the state. |
| `get.responses.200.content.application/json.last_changed?` | `string` | **`Description`** The last changed time of the state. |
| `get.responses.200.content.application/json.last_updated?` | `string` | **`Description`** The last updated time of the state. |
| `get.responses.200.content.application/json.state?` | `string` | **`Description`** The state of the state. |
| `get.responses.404` | { `content`: { `application/json`: { `message?`: `string`  }  }  } | **`Description`** Entity not found |
| `get.responses.404.content` | { `application/json`: { `message?`: `string`  }  } | - |
| `get.responses.404.content.application/json` | { `message?`: `string`  } | - |
| `get.responses.404.content.application/json.message?` | `string` | **`Description`** The message returned by the API. |

#### Defined in

[src/homeassistant/schema.ts:162](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/schema.ts#L162)

___

### /api/template

• **/api/template**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `post` | { `requestBody`: { `content`: { `application/json`: { `template?`: `string`  }  }  } ; `responses`: { `200`: { `content`: { `text/plain`: `string`  }  } ; `400`: { `content`: { `application/json`: { `message?`: `string`  }  }  }  }  } | Render a Home Assistant template. **`Description`** Render a Home Assistant template. |
| `post.requestBody` | { `content`: { `application/json`: { `template?`: `string`  }  }  } | Render a Home Assistant template. **`Description`** Render a Home Assistant template. |
| `post.requestBody.content` | { `application/json`: { `template?`: `string`  }  } | - |
| `post.requestBody.content.application/json` | { `template?`: `string`  } | - |
| `post.requestBody.content.application/json.template?` | `string` | **`Description`** The template to render. |
| `post.responses` | { `200`: { `content`: { `text/plain`: `string`  }  } ; `400`: { `content`: { `application/json`: { `message?`: `string`  }  }  }  } | - |
| `post.responses.200` | { `content`: { `text/plain`: `string`  }  } | **`Description`** Successful response |
| `post.responses.200.content` | { `text/plain`: `string`  } | - |
| `post.responses.200.content.text/plain` | `string` | - |
| `post.responses.400` | { `content`: { `application/json`: { `message?`: `string`  }  }  } | **`Description`** Bad request |
| `post.responses.400.content` | { `application/json`: { `message?`: `string`  }  } | - |
| `post.responses.400.content.application/json` | { `message?`: `string`  } | - |
| `post.responses.400.content.application/json.message?` | `string` | **`Description`** The message returned by the API. |

#### Defined in

[src/homeassistant/schema.ts:266](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/schema.ts#L266)
