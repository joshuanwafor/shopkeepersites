# ShopmenuStoreResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the storefront | [default to undefined]
**name** | **string** | Store name | [default to undefined]
**domain** | **string** | Store domain | [default to undefined]
**description** | **string** | Store description | [optional] [default to undefined]
**caption** | **string** | Store tagline or caption | [optional] [default to undefined]
**termsAndConditions** | **string** | Full text of the terms and conditions | [optional] [default to undefined]
**policyDocument** | **string** | Full text of the store policy document (e.g. privacy or store policy) | [optional] [default to undefined]
**supportedDeliveryMethods** | **Array&lt;string&gt;** | Delivery methods supported by this storefront | [optional] [default to undefined]
**supportedPaymentMethods** | **Array&lt;string&gt;** | Payment methods supported by this storefront | [optional] [default to undefined]
**theme** | [**UDThemeSettings**](UDThemeSettings.md) | Theme settings for the storefront | [default to undefined]
**socialMedia** | [**UDSocialMediaLinks**](UDSocialMediaLinks.md) | Social media links | [optional] [default to undefined]
**config** | [**UsedishaConfig**](UsedishaConfig.md) | Store configuration settings | [optional] [default to undefined]
**logo** | **string** | Store logo | [optional] [default to undefined]
**coverPhoto** | **string** | Store cover photo | [optional] [default to undefined]
**legalName** | **string** | Legal name of the business | [optional] [default to undefined]
**favicon** | **string** | Store favicon emoji or URL | [optional] [default to undefined]
**launchDate** | **string** | Store launch date | [optional] [default to undefined]
**operatingHours** | [**UsedishaOperatingHours**](UsedishaOperatingHours.md) | Weekly operating hours | [optional] [default to undefined]
**storeUrl** | **string** | Full store URL | [default to undefined]
**categories** | **Array&lt;string&gt;** | Shopmenu categories this store belongs to | [optional] [default to undefined]
**address** | [**UsedishaAddress**](UsedishaAddress.md) | Physical street address of the store | [optional] [default to undefined]
**location** | [**UsedishaLocation**](UsedishaLocation.md) | GeoJSON Point location of the store [longitude, latitude] | [optional] [default to undefined]

## Example

```typescript
import { ShopmenuStoreResponse } from './api';

const instance: ShopmenuStoreResponse = {
    id,
    name,
    domain,
    description,
    caption,
    termsAndConditions,
    policyDocument,
    supportedDeliveryMethods,
    supportedPaymentMethods,
    theme,
    socialMedia,
    config,
    logo,
    coverPhoto,
    legalName,
    favicon,
    launchDate,
    operatingHours,
    storeUrl,
    categories,
    address,
    location,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
