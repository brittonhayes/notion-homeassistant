[notion-homeassistant](../README.md) / Integration

# Class: Integration

## Table of contents

### Constructors

- [constructor](Integration.md#constructor)

### Properties

- [database](Integration.md#database)
- [notion](Integration.md#notion)

## Constructors

### constructor

• **new Integration**(`properties`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties` | `IntegrationProperties` |

#### Defined in

[index.ts:11](https://github.com/brittonhayes/notion-homeassistant/blob/4424ba1/src/notion/index.ts#L11)

## Properties

### database

• **database**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `properties` | (`databaseId`: `string`) => `Promise`<`Record`<`string`, `DatabasePropertyConfigResponse`\>\> |
| `update` | (`pageParameters`: `CreatePageBodyParameters`) => `Promise`<`CreatePageResponse`\> |

#### Defined in

[index.ts:15](https://github.com/brittonhayes/notion-homeassistant/blob/4424ba1/src/notion/index.ts#L15)

___

### notion

• `Private` `Readonly` **notion**: `default`

#### Defined in

[index.ts:9](https://github.com/brittonhayes/notion-homeassistant/blob/4424ba1/src/notion/index.ts#L9)
