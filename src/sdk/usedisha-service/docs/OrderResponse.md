# OrderResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**orderNumber** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**paymentStatus** | **string** |  | [default to undefined]
**fulfillmentStatus** | **string** |  | [default to undefined]
**subTotal** | **number** |  | [default to undefined]
**totalAmount** | **number** |  | [default to undefined]
**discount** | **object** |  | [optional] [default to undefined]
**shipping** | [**OrderShippingResponse**](OrderShippingResponse.md) |  | [optional] [default to undefined]
**delivery** | **object** |  | [optional] [default to undefined]
**items** | [**Array&lt;OrderItemResponse&gt;**](OrderItemResponse.md) |  | [default to undefined]
**payments** | **Array&lt;object&gt;** |  | [default to undefined]
**notes** | **string** |  | [optional] [default to undefined]
**customerNotes** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]

## Example

```typescript
import { OrderResponse } from './api';

const instance: OrderResponse = {
    id,
    orderNumber,
    status,
    paymentStatus,
    fulfillmentStatus,
    subTotal,
    totalAmount,
    discount,
    shipping,
    delivery,
    items,
    payments,
    notes,
    customerNotes,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
