# CreateUsedishaDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Store name | [default to undefined]
**businessId** | **string** | The business ID this storefront belongs to | [default to undefined]
**connectedBranchId** | **string** | The connected branch ID within the business | [default to undefined]
**domain** | **string** | The storefront domain (must be unique) | [default to undefined]
**description** | **string** | A detailed store description | [optional] [default to undefined]
**caption** | **string** | A short, catchy tagline for the store | [optional] [default to undefined]
**legalName** | **string** | Legal name of business | [optional] [default to undefined]

## Example

```typescript
import { CreateUsedishaDto } from './api';

const instance: CreateUsedishaDto = {
    name,
    businessId,
    connectedBranchId,
    domain,
    description,
    caption,
    legalName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
