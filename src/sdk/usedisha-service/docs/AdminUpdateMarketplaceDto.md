# AdminUpdateMarketplaceDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minimumOrderAmount** | **number** | Minimum cart value required for checkout | [optional] [default to undefined]
**estimatedDeliveryTime** | **string** | Estimated delivery time display string | [optional] [default to undefined]
**priceRange** | **string** | Price tier | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | Freeform discovery keywords | [optional] [default to undefined]
**featured** | **boolean** | Promoted/featured listing flag | [optional] [default to false]

## Example

```typescript
import { AdminUpdateMarketplaceDto } from './api';

const instance: AdminUpdateMarketplaceDto = {
    minimumOrderAmount,
    estimatedDeliveryTime,
    priceRange,
    tags,
    featured,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
