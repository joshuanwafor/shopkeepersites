# CustomerCartLineResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storeId** | **string** | Storefront id | [default to undefined]
**storeName** | **string** | Storefront name, for display | [default to undefined]
**domain** | **string** | Storefront domain — what checkout is keyed on | [optional] [default to undefined]
**branchId** | **string** | Branch the shopper is ordering from | [optional] [default to undefined]
**branchName** | **string** | Branch name, for display | [optional] [default to undefined]
**marketplaceId** | **string** | Market the store was opened from (order attribution) | [optional] [default to undefined]
**productId** | **string** | Product id | [default to undefined]
**variantId** | **string** | Variant id, for a product sold by variant. Each variant is its own line. | [optional] [default to undefined]
**variantTitle** | **string** | The variant, for display | [optional] [default to undefined]
**title** | **string** | Product name, for display | [default to undefined]
**quantity** | **number** | How many. When adding a product already in the cart, how many more. | [default to undefined]
**unitPriceMinor** | **number** | Unit price in minor units (kobo), for display — checkout prices items itself | [default to undefined]
**imageUrl** | **string** | Product image URL | [optional] [default to undefined]
**id** | **string** | Line id: &#x60;storeId:productId&#x60;, or &#x60;storeId:productId:variantId&#x60; for a variant | [default to undefined]

## Example

```typescript
import { CustomerCartLineResponseDto } from './api';

const instance: CustomerCartLineResponseDto = {
    storeId,
    storeName,
    domain,
    branchId,
    branchName,
    marketplaceId,
    productId,
    variantId,
    variantTitle,
    title,
    quantity,
    unitPriceMinor,
    imageUrl,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
