# UsedishaOrderIntentDetailResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Order intent ID | [default to undefined]
**intentReference** | **string** | Order intent reference | [default to undefined]
**status** | **string** | Intent status | [default to undefined]
**totalAmount** | **number** | Total amount | [default to undefined]
**subTotal** | **number** | Sub-total | [default to undefined]
**taxAmount** | **number** | Tax amount | [optional] [default to undefined]
**discountAmount** | **number** | Discount amount | [optional] [default to undefined]
**shippingAmount** | **number** | Shipping/delivery amount | [optional] [default to undefined]
**items** | **Array&lt;object&gt;** | Order items | [default to undefined]
**customer** | **object** | Customer snapshot | [optional] [default to undefined]
**shipping** | **object** | Shipping snapshot | [optional] [default to undefined]
**paymentReference** | **string** | Payment reference | [optional] [default to undefined]
**paymentAuthorizationUrl** | **string** | Payment authorization URL | [optional] [default to undefined]
**expiresAt** | **string** | Expiry time | [optional] [default to undefined]
**orderId** | **string** | Order ID (once created) | [optional] [default to undefined]
**orderNumber** | **string** | Order number (once created) | [optional] [default to undefined]
**createdAt** | **string** | Creation time | [default to undefined]

## Example

```typescript
import { UsedishaOrderIntentDetailResponseDto } from './api';

const instance: UsedishaOrderIntentDetailResponseDto = {
    id,
    intentReference,
    status,
    totalAmount,
    subTotal,
    taxAmount,
    discountAmount,
    shippingAmount,
    items,
    customer,
    shipping,
    paymentReference,
    paymentAuthorizationUrl,
    expiresAt,
    orderId,
    orderNumber,
    createdAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
