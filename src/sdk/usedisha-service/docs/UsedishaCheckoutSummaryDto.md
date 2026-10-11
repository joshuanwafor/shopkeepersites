# UsedishaCheckoutSummaryDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subTotal** | **number** | Subtotal before fees and discounts | [default to undefined]
**taxAmount** | **number** | Tax amount | [optional] [default to undefined]
**discountAmount** | **number** | Discount amount | [optional] [default to undefined]
**deliveryFee** | **number** | Delivery fee (0 for PICKUP) | [default to undefined]
**serviceFee** | **number** | Platform service fee | [default to undefined]
**totalAmount** | **number** | Total amount charged to the customer | [default to undefined]
**itemCount** | **number** | Number of items in the cart | [default to undefined]
**creditAmount** | **number** | Paid with ShopCentral credit (naira) | [optional] [default to undefined]
**amountDue** | **number** | What the card is charged: total less credit (naira) | [optional] [default to undefined]

## Example

```typescript
import { UsedishaCheckoutSummaryDto } from './api';

const instance: UsedishaCheckoutSummaryDto = {
    subTotal,
    taxAmount,
    discountAmount,
    deliveryFee,
    serviceFee,
    totalAmount,
    itemCount,
    creditAmount,
    amountDue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
