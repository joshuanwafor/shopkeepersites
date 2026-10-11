# UsedishaBulkCheckoutStoreDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **string** | Usedisha store domain | [default to undefined]
**branchId** | **string** | Branch to order from. Defaults to the storefront default branch when omitted. | [optional] [default to undefined]
**items** | [**Array&lt;UsedishaCheckoutItemDto&gt;**](UsedishaCheckoutItemDto.md) | This store\&#39;s cart items | [default to undefined]
**deliveryMethod** | **string** | How this store\&#39;s order will be fulfilled | [default to undefined]
**packageClass** | **string** | Customer-selected package/handling class. Adjusts the delivery fee. Defaults to &#x60;parcel&#x60;. | [optional] [default to PackageClassEnum_Parcel]
**marketDeliveryWindow** | **string** | Market-delivery run for this store, by label. Optional when estimating (the server picks the next run and reports it back) but REQUIRED on initiate when deliveryMethod is &#x60;marketDelivery&#x60;, as in the single-store checkout. | [optional] [default to undefined]
**customerNotes** | **string** | Notes for this store\&#39;s order | [optional] [default to undefined]
**marketplaceId** | **string** | Marketplace tag for this store\&#39;s order, e.g. the market it was browsed from. Overrides the top-level &#x60;marketplaceId&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { UsedishaBulkCheckoutStoreDto } from './api';

const instance: UsedishaBulkCheckoutStoreDto = {
    domain,
    branchId,
    items,
    deliveryMethod,
    packageClass,
    marketDeliveryWindow,
    customerNotes,
    marketplaceId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
