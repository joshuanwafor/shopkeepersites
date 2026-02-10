# StorefrontProfileResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the storefront | [default to undefined]
**name** | **string** | Store name | [default to undefined]
**domain** | **string** | Store domain | [default to undefined]
**description** | **string** | Store description | [optional] [default to undefined]
**caption** | **string** | Store tagline or caption | [optional] [default to undefined]
**theme** | [**UDThemeSettings**](UDThemeSettings.md) | Theme settings for the storefront | [default to undefined]
**socialMedia** | [**UDSocialMediaLinks**](UDSocialMediaLinks.md) | Social media links | [optional] [default to undefined]
**config** | [**UsedishaConfig**](UsedishaConfig.md) | Store configuration settings | [optional] [default to undefined]
**logo** | **string** | Store logo | [optional] [default to undefined]
**coverPhoto** | **string** | Store cover photo | [optional] [default to undefined]
**legalName** | **string** | Legal name of the business | [optional] [default to undefined]
**favicon** | **string** | Store favicon emoji or URL | [optional] [default to undefined]
**launchDate** | **string** | Store launch date | [optional] [default to undefined]
**storeUrl** | **string** | Full store URL | [default to undefined]

## Example

```typescript
import { StorefrontProfileResponse } from './api';

const instance: StorefrontProfileResponse = {
    id,
    name,
    domain,
    description,
    caption,
    theme,
    socialMedia,
    config,
    logo,
    coverPhoto,
    legalName,
    favicon,
    launchDate,
    storeUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
