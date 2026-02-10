# UpdateUsedishaDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Store name | [optional] [default to undefined]
**customDomain** | **string** | The custom domain for the storefront | [optional] [default to undefined]
**status** | **string** | The storefront status | [optional] [default to StatusEnum_Active]
**description** | **string** | A detailed store description | [optional] [default to undefined]
**caption** | **string** | A short, catchy tagline for the store | [optional] [default to undefined]
**theme** | [**UDThemeSettings**](UDThemeSettings.md) | Theme settings | [optional] [default to undefined]
**legalName** | **string** | Legal name of business | [optional] [default to undefined]
**favicon** | **string** | Store favicon emoji | [optional] [default to undefined]
**logo** | **string** | Store logo | [optional] [default to undefined]
**coverPhoto** | **string** | Store cover photo | [optional] [default to undefined]
**launchDate** | **string** | Date the store went live | [optional] [default to undefined]

## Example

```typescript
import { UpdateUsedishaDto } from './api';

const instance: UpdateUsedishaDto = {
    name,
    customDomain,
    status,
    description,
    caption,
    theme,
    legalName,
    favicon,
    logo,
    coverPhoto,
    launchDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
