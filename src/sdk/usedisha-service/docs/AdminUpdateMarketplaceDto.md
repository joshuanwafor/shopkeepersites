# AdminUpdateMarketplaceDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**badges** | **Array&lt;string&gt;** | Trust/quality badges awarded to this storefront by a platform admin | [optional] [default to undefined]
**sellerTypes** | **Array&lt;string&gt;** | What kind of seller this storefront is. Declared by the merchant; customers can filter on it. | [optional] [default to undefined]
**minimumOrderAmount** | **number** | Minimum cart value required for checkout | [optional] [default to undefined]
**estimatedDeliveryTime** | **string** | Estimated delivery time display string | [optional] [default to undefined]
**priceRange** | **string** | Price tier | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Freeform discovery keywords | [optional] [default to undefined]
**featured** | **boolean** | Promoted/featured listing flag | [optional] [default to false]

## Example

```typescript
import { AdminUpdateMarketplaceDto } from './api';

const instance: AdminUpdateMarketplaceDto = {
    badges,
    sellerTypes,
    minimumOrderAmount,
    estimatedDeliveryTime,
    priceRange,
    tags,
    featured,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
