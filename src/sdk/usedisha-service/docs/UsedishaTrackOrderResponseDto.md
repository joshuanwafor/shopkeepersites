# UsedishaTrackOrderResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderNumber** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**paymentStatus** | **string** |  | [default to undefined]
**fulfillmentStatus** | **string** |  | [default to undefined]
**subTotal** | **number** |  | [default to undefined]
**totalAmount** | **number** |  | [default to undefined]
**itemCount** | **number** |  | [default to undefined]
**items** | [**Array&lt;UsedishaTrackOrderItemDto&gt;**](UsedishaTrackOrderItemDto.md) |  | [default to undefined]
**shipping** | [**UsedishaTrackOrderShippingDto**](UsedishaTrackOrderShippingDto.md) |  | [optional] [default to undefined]
**deliveryStatus** | **string** | Delivery status when a delivery is in progress | [optional] [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]

## Example

```typescript
import { UsedishaTrackOrderResponseDto } from './api';

const instance: UsedishaTrackOrderResponseDto = {
    orderNumber,
    status,
    paymentStatus,
    fulfillmentStatus,
    subTotal,
    totalAmount,
    itemCount,
    items,
    shipping,
    deliveryStatus,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
