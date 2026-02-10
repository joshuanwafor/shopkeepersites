# UsedishaCheckoutSummaryDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subTotal** | **number** | Subtotal before tax and discounts | [default to undefined]
**taxAmount** | **number** | Tax amount | [optional] [default to undefined]
**discountAmount** | **number** | Discount amount | [optional] [default to undefined]
**shippingAmount** | **number** | Shipping amount | [optional] [default to undefined]
**totalAmount** | **number** | Total amount | [default to undefined]
**itemCount** | **number** | Number of items | [default to undefined]

## Example

```typescript
import { UsedishaCheckoutSummaryDto } from './api';

const instance: UsedishaCheckoutSummaryDto = {
    subTotal,
    taxAmount,
    discountAmount,
    shippingAmount,
    totalAmount,
    itemCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
