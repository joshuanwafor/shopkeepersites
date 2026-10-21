# PayLinkStoreDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**logoUrl** | **string** |  | [optional] [default to undefined]
**deliveryMethod** | **string** |  | [default to undefined]
**items** | [**Array&lt;PayLinkItemDto&gt;**](PayLinkItemDto.md) |  | [default to undefined]
**subTotal** | **number** | Naira; absent when the store can\&#39;t be priced now | [optional] [default to undefined]
**deliveryFee** | **number** |  | [optional] [default to undefined]
**serviceFee** | **number** |  | [optional] [default to undefined]
**discountAmount** | **number** |  | [optional] [default to undefined]
**discount** | [**UsedishaAppliedDealDto**](UsedishaAppliedDealDto.md) | The store\&#39;s deal, when one applies | [optional] [default to undefined]
**totalAmount** | **number** |  | [optional] [default to undefined]
**marketDelivery** | [**UsedishaMarketDeliveryDto**](UsedishaMarketDeliveryDto.md) |  | [optional] [default to undefined]
**problem** | **string** | Why this store can\&#39;t be paid for now (closed, sold out…) | [optional] [default to undefined]

## Example

```typescript
import { PayLinkStoreDto } from './api';

const instance: PayLinkStoreDto = {
    domain,
    name,
    logoUrl,
    deliveryMethod,
    items,
    subTotal,
    deliveryFee,
    serviceFee,
    discountAmount,
    discount,
    totalAmount,
    marketDelivery,
    problem,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
