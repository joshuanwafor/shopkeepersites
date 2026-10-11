# UsedishaOrderFeeEstimateResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subTotal** | **number** | Cart sub-total (items only) | [default to undefined]
**deliveryFee** | **number** | Delivery fee in NGN (0 for PICKUP / free-delivery threshold) | [default to undefined]
**serviceFee** | **number** | Platform service fee in NGN | [default to undefined]
**discountAmount** | **number** | Discount amount in NGN | [default to undefined]
**totalAmount** | **number** | Grand total the customer will pay | [default to undefined]
**distanceKm** | **number** | Straight-line distance from customer to store in km (EXPRESS only) | [optional] [default to undefined]
**isFreeDelivery** | **boolean** | Whether the free-delivery threshold was met | [default to undefined]
**packageClass** | **string** | Package/handling class the delivery fee was priced for | [default to undefined]
**marketDelivery** | [**UsedishaMarketDeliveryDto**](UsedishaMarketDeliveryDto.md) | The market-delivery run this quote is for. Present only for &#x60;marketDelivery&#x60;. | [optional] [default to undefined]
**packageSurcharge** | **number** | Extra delivery cost added by the package class (already included in deliveryFee) | [default to undefined]
**breakdown** | [**UsedishaFeeBreakdownDto**](UsedishaFeeBreakdownDto.md) | Human-readable notes for each fee line | [default to undefined]
**delivery** | [**UsedishaDeliveryQuoteDto**](UsedishaDeliveryQuoteDto.md) | Delivery quote details (provider + reference for platformDelivery) | [optional] [default to undefined]
**credit** | [**UsedishaCheckoutCreditDto**](UsedishaCheckoutCreditDto.md) | Signed-in shoppers only, while rewards are on: their credit and how much this order can use | [optional] [default to undefined]

## Example

```typescript
import { UsedishaOrderFeeEstimateResponseDto } from './api';

const instance: UsedishaOrderFeeEstimateResponseDto = {
    subTotal,
    deliveryFee,
    serviceFee,
    discountAmount,
    totalAmount,
    distanceKm,
    isFreeDelivery,
    packageClass,
    marketDelivery,
    packageSurcharge,
    breakdown,
    delivery,
    credit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
