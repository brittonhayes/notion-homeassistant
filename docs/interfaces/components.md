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

[src/homeassistant/schema.ts:159](https://github.com/brittonhayes/notion-homeassistant/blob/a98ac0d/src/homeassistant/schema.ts#L159)

___

### parameters

• **parameters**: `never`

#### Defined in

[src/homeassistant/schema.ts:157](https://github.com/brittonhayes/notion-homeassistant/blob/a98ac0d/src/homeassistant/schema.ts#L157)

___

### pathItems

• **pathItems**: `never`

#### Defined in

[src/homeassistant/schema.ts:160](https://github.com/brittonhayes/notion-homeassistant/blob/a98ac0d/src/homeassistant/schema.ts#L160)

___

### requestBodies

• **requestBodies**: `never`

#### Defined in

[src/homeassistant/schema.ts:158](https://github.com/brittonhayes/notion-homeassistant/blob/a98ac0d/src/homeassistant/schema.ts#L158)

___

### responses

• **responses**: `never`

#### Defined in

[src/homeassistant/schema.ts:156](https://github.com/brittonhayes/notion-homeassistant/blob/a98ac0d/src/homeassistant/schema.ts#L156)

___

### schemas

• **schemas**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
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
| `Message` | { `message?`: `string`  } | - |
| `Message.message?` | `string` | **`Description`** The message returned by the API. |
| `Service` | { `domain?`: `string` ; `services?`: { `description?`: `string` ; `fields?`: `Record`<`string`, `never`\> ; `name?`: `string` ; `target?`: `Record`<`string`, `never`\>  }[]  } | - |
| `Service.domain?` | `string` | **`Description`** The domain of the service. |
| `Service.services?` | { `description?`: `string` ; `fields?`: `Record`<`string`, `never`\> ; `name?`: `string` ; `target?`: `Record`<`string`, `never`\>  }[] | **`Description`** The names of the services. |
| `Services` | { `domain?`: `string` ; `services?`: { `description?`: `string` ; `fields?`: `Record`<`string`, `never`\> ; `name?`: `string` ; `target?`: `Record`<`string`, `never`\>  }[]  }[] | **`Description`** An array of service objects. Each service object contains domain, service name, and description. |

#### Defined in

[src/homeassistant/schema.ts:92](https://github.com/brittonhayes/notion-homeassistant/blob/a98ac0d/src/homeassistant/schema.ts#L92)
