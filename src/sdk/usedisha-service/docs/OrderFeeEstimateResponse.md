# OrderFeeEstimateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subTotal** | **number** | Cart sub-total (items only) | [default to undefined]
**deliveryFee** | **number** | Delivery fee in NGN (0 for PICKUP or free-delivery threshold met) | [default to undefined]
**serviceFee** | **number** | Platform service fee in NGN | [default to undefined]
**discountAmount** | **number** | Discount amount in NGN | [default to undefined]
**totalAmount** | **number** | Grand total the customer will pay | [default to undefined]
**distanceKm** | **number** | Straight-line distance from customer to store in km (EXPRESS only) | [optional] [default to undefined]
**isFreeDelivery** | **boolean** | Whether free-delivery threshold was met | [default to undefined]
**breakdown** | [**FeeBreakdownResponse**](FeeBreakdownResponse.md) | Human-readable notes for each fee line | [default to undefined]

## Example

```typescript
import { OrderFeeEstimateResponse } from './api';

const instance: OrderFeeEstimateResponse = {
    subTotal,
    deliveryFee,
    serviceFee,
    discountAmount,
    totalAmount,
    distanceKm,
    isFreeDelivery,
    breakdown,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
