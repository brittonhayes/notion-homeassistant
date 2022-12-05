[notion-homeassistant](../README.md) / components

# Interface: components

## Table of contents

### Properties

- [headers](components.md#headers)
- [parameters](components.md#parameters)
- [pathItems](components.md#pathitems)
- [requestBodies](components.md#requestbodies)
- [responses](components.md#responses)
- [schemas](components.md#schemas)

## Properties

### headers

• **headers**: `never`

#### Defined in

[src/homeassistant/schema.ts:460](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/schema.ts#L460)

___

### parameters

• **parameters**: `never`

#### Defined in

[src/homeassistant/schema.ts:458](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/schema.ts#L458)

___

### pathItems

• **pathItems**: `never`

#### Defined in

[src/homeassistant/schema.ts:461](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/schema.ts#L461)

___

### requestBodies

• **requestBodies**: `never`

#### Defined in

[src/homeassistant/schema.ts:459](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/schema.ts#L459)

___

### responses

• **responses**: `never`

#### Defined in

[src/homeassistant/schema.ts:457](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/schema.ts#L457)

___

### schemas

• **schemas**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `CalendarEntities` | { `calendar?`: `string` ; `entity_id?`: `string`  }[] | **`Description`** An array of calendar objects. Each calendar object contains calendar name, and entity ID. |
| `CalendarEntity` | { `calendar?`: `string` ; `entity_id?`: `string`  } | - |
| `CalendarEntity.calendar?` | `string` | **`Description`** The name of the calendar. |
| `CalendarEntity.entity_id?` | `string` | **`Description`** The entity ID of the calendar. |
| `CalendarEvent` | { `description?`: `string` ; `end?`: `Without`<{ `dateTime?`: `string`  }, { `date?`: `string`  }\> & { `date?`: `string`  } \| `Without`<{ `date?`: `string`  }, { `dateTime?`: `string`  }\> & { `dateTime?`: `string`  } ; `location?`: `string` ; `start?`: `Without`<{ `dateTime?`: `string`  }, { `date?`: `string`  }\> & { `date?`: `string`  } \| `Without`<{ `date?`: `string`  }, { `dateTime?`: `string`  }\> & { `dateTime?`: `string`  } ; `summary?`: `string`  } | - |
| `CalendarEvent.description?` | `string` | **`Description`** The description of the calendar event. |
| `CalendarEvent.end?` | `Without`<{ `dateTime?`: `string`  }, { `date?`: `string`  }\> & { `date?`: `string`  } \| `Without`<{ `date?`: `string`  }, { `dateTime?`: `string`  }\> & { `dateTime?`: `string`  } | - |
| `CalendarEvent.location?` | `string` | **`Description`** The location of the calendar event. |
| `CalendarEvent.start?` | `Without`<{ `dateTime?`: `string`  }, { `date?`: `string`  }\> & { `date?`: `string`  } \| `Without`<{ `date?`: `string`  }, { `dateTime?`: `string`  }\> & { `dateTime?`: `string`  } | - |
| `CalendarEvent.summary?` | `string` | **`Description`** The summary of the calendar event. |
| `CalendarEvents` | { `description?`: `string` ; `end?`: `Without`<{ `dateTime?`: `string`  }, { `date?`: `string`  }\> & { `date?`: `string`  } \| `Without`<{ `date?`: `string`  }, { `dateTime?`: `string`  }\> & { `dateTime?`: `string`  } ; `location?`: `string` ; `start?`: `Without`<{ `dateTime?`: `string`  }, { `date?`: `string`  }\> & { `date?`: `string`  } \| `Without`<{ `date?`: `string`  }, { `dateTime?`: `string`  }\> & { `dateTime?`: `string`  } ; `summary?`: `string`  }[] | **`Description`** An array of calendar event objects. Each calendar event object contains event name, start time, end time, and location. |
| `Config` | { `components?`: `string`[] ; `config_dir?`: `string` ; `elevation?`: `number` ; `latitude?`: `number` ; `location_name?`: `string` ; `longitude?`: `number` ; `time_zone?`: `string` ; `unit_system?`: { `length?`: `string` ; `mass?`: `string` ; `pressure?`: `string` ; `temperature?`: `string` ; `volume?`: `string`  } ; `version?`: `string` ; `whitelist_external_dirs?`: `string`[]  } | - |
| `Config.components?` | `string`[] | **`Description`** The components that are enabled in the Home Assistant instance. |
| `Config.config_dir?` | `string` | **`Description`** The directory where the Home Assistant configuration is stored. |
| `Config.elevation?` | `number` | **`Description`** The elevation of the Home Assistant instance. |
| `Config.latitude?` | `number` | **`Description`** The latitude of the Home Assistant instance. |
| `Config.location_name?` | `string` | **`Description`** The location name of the Home Assistant instance. |
| `Config.longitude?` | `number` | **`Description`** The longitude of the Home Assistant instance. |
| `Config.time_zone?` | `string` | **`Description`** The time zone of the Home Assistant instance. |
| `Config.unit_system?` | { `length?`: `string` ; `mass?`: `string` ; `pressure?`: `string` ; `temperature?`: `string` ; `volume?`: `string`  } | **`Description`** The unit system of the Home Assistant instance. |
| `Config.unit_system.length?` | `string` | **`Description`** The length unit of the Home Assistant instance. |
| `Config.unit_system.mass?` | `string` | **`Description`** The mass unit of the Home Assistant instance. |
| `Config.unit_system.pressure?` | `string` | **`Description`** The pressure unit of the Home Assistant instance. |
| `Config.unit_system.temperature?` | `string` | **`Description`** The temperature unit of the Home Assistant instance. |
| `Config.unit_system.volume?` | `string` | **`Description`** The volume unit of the Home Assistant instance. |
| `Config.version?` | `string` | **`Description`** The version of the Home Assistant instance. |
| `Config.whitelist_external_dirs?` | `string`[] | **`Description`** The external directories that are whitelisted in the Home Assistant instance. |
| `Event` | { `event?`: `string` ; `listener_count?`: `Record`<`string`, `never`\>  } | - |
| `Event.event?` | `string` | **`Description`** The type of the event. |
| `Event.listener_count?` | `Record`<`string`, `never`\> | **`Description`** The data of the event. |
| `Events` | { `event?`: `string` ; `listener_count?`: `Record`<`string`, `never`\>  }[] | **`Description`** An array of event objects. Each event object contains event name and listener count. |
| `Log` | { `context_user_id?`: `string` ; `domain?`: `string` ; `entity_id?`: `string` ; `message?`: `string` ; `name?`: `string` ; `when?`: `string`  } | - |
| `Log.context_user_id?` | `string` | **`Description`** The user id context of the log |
| `Log.domain?` | `string` | **`Description`** The domain of the log. |
| `Log.entity_id?` | `string` | **`Description`** The entity id of the log. |
| `Log.message?` | `string` | **`Description`** The message of the log. |
| `Log.name?` | `string` | **`Description`** The name of the log. |
| `Log.when?` | `string` | Format: date-time **`Description`** The timestamp of the log. |
| `Logs` | { `context_user_id?`: `string` ; `domain?`: `string` ; `entity_id?`: `string` ; `message?`: `string` ; `name?`: `string` ; `when?`: `string`  }[] | **`Description`** An array of log objects. Each log object contains log level, timestamp, source, and message. |
| `Message` | { `message?`: `string`  } | - |
| `Message.message?` | `string` | **`Description`** The message returned by the API. |
| `Service` | { `domain?`: `string` ; `services?`: { `description?`: `string` ; `fields?`: `Record`<`string`, `never`\> ; `name?`: `string` ; `target?`: `Record`<`string`, `never`\>  }[]  } | - |
| `Service.domain?` | `string` | **`Description`** The domain of the service. |
| `Service.services?` | { `description?`: `string` ; `fields?`: `Record`<`string`, `never`\> ; `name?`: `string` ; `target?`: `Record`<`string`, `never`\>  }[] | **`Description`** The names of the services. |
| `Services` | { `domain?`: `string` ; `services?`: { `description?`: `string` ; `fields?`: `Record`<`string`, `never`\> ; `name?`: `string` ; `target?`: `Record`<`string`, `never`\>  }[]  }[] | **`Description`** An array of service objects. Each service object contains domain, service name, and description. |
| `State` | { `attributes?`: `Record`<`string`, `never`\> ; `entity_id?`: `string` ; `last_changed?`: `string` ; `last_updated?`: `string` ; `state?`: `string`  } | - |
| `State.attributes?` | `Record`<`string`, `never`\> | **`Description`** The attributes of the state. |
| `State.entity_id?` | `string` | **`Description`** The entity ID of the state. |
| `State.last_changed?` | `string` | **`Description`** The last changed time of the state. |
| `State.last_updated?` | `string` | **`Description`** The last updated time of the state. |
| `State.state?` | `string` | **`Description`** The state of the state. |
| `States` | { `attributes?`: `Record`<`string`, `never`\> ; `entity_id?`: `string` ; `last_changed?`: `string` ; `last_updated?`: `string` ; `state?`: `string`  }[] | **`Description`** An array of state objects. Each state object contains entity ID, state, attributes, and last changed time. |
| `Template` | { `template?`: `string`  } | - |
| `Template.template?` | `string` | **`Description`** The template to render. |

#### Defined in

[src/homeassistant/schema.ts:302](https://github.com/brittonhayes/notion-homeassistant/blob/ce0fe32/src/homeassistant/schema.ts#L302)
