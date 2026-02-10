# Usedisha


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the storefront (generated) | [default to undefined]
**name** | **string** | Store name | [default to undefined]
**businessId** | **string** | The business ID this storefront belongs to | [default to undefined]
**connectedBranchId** | **string** | The connected branch ID within the business | [default to undefined]
**domain** | **string** | The storefront domain (must be unique) | [default to undefined]
**customDomain** | **string** | The custom domain for the storefront | [optional] [default to undefined]
**status** | **string** | The storefront status | [default to StatusEnum_Active]
**approvalStatus** | **string** | The storefront approval status | [optional] [default to undefined]
**description** | **string** | A detailed store description | [optional] [default to undefined]
**caption** | **string** | A short, catchy tagline for the store | [optional] [default to undefined]
**theme** | [**UDThemeSettings**](UDThemeSettings.md) | Theme settings | [default to undefined]
**socialMedia** | [**UDSocialMediaLinks**](UDSocialMediaLinks.md) | Social media links | [optional] [default to undefined]
**config** | [**UsedishaConfig**](UsedishaConfig.md) | Storefront configuration options | [default to undefined]
**legalName** | **string** | Legal name of business | [optional] [default to undefined]
**favicon** | **string** | Store favicon emoji | [optional] [default to undefined]
**logo** | **string** | Store logo | [optional] [default to undefined]
**coverPhoto** | **string** | Store cover photo | [optional] [default to undefined]
**launchDate** | **string** | Date the store went live | [optional] [default to undefined]
**metadata** | **object** | Metadata for tracking, custom scripts, etc. | [optional] [default to undefined]
**createdAt** | **string** | Timestamp of creation | [optional] [readonly] [default to undefined]
**updatedAt** | **string** | Timestamp of last update | [optional] [readonly] [default to undefined]
**createdBy** | **string** | ID of the user who created the storefront | [optional] [default to undefined]
**updatedBy** | **string** | ID of the user who last updated the storefront | [optional] [default to undefined]

## Example

```typescript
import { Usedisha } from './api';

const instance: Usedisha = {
    id,
    name,
    businessId,
    connectedBranchId,
    domain,
    customDomain,
    status,
    approvalStatus,
    description,
    caption,
    theme,
    socialMedia,
    config,
    legalName,
    favicon,
    logo,
    coverPhoto,
    launchDate,
    metadata,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
