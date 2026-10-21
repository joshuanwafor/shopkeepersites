# UsedishaOrderFeeEstimateResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subTotal** | **number** | Cart sub-total (items only) | [default to undefined]
**deliveryFee** | **number** | Delivery fee in NGN (0 for PICKUP / free-delivery threshold) | [default to undefined]
**serviceFee** | **number** | Platform service fee in NGN | [default to undefined]
**discountAmount** | **number** | Discount amount in NGN: the store\&#39;s deal, funded by the store. Delivery and service fees are priced on the full subTotal. | [default to undefined]
**discount** | [**UsedishaAppliedDealDto**](UsedishaAppliedDealDto.md) | The store\&#39;s deal on this cart, when one applies: the biggest saving of its automatic discounts that work online. Never stacked. | [optional] [default to undefined]
**totalAmount** | **number** | Grand total the customer will pay | [default to undefined]
**distanceKm** | **number** | Straight-line distance from customer to store in km (EXPRESS only) | [optional] [default to undefined]
**isFreeDelivery** | **boolean** | Whether the free-delivery threshold was met | [default to undefined]
**packageClass** | **string** | The order\&#39;s main handling class, worked out from its items; the delivery fee was priced for deliveryRequirements.handling | [default to undefined]
**deliveryRequirements** | **object** | What the delivery needs: every handling class (most demanding first), the smallest vehicle (motorcycle, car or van), whether it is urgent (consumables), the known weight (kg) and longest side (cm), and the rules version. | [default to undefined]
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
    discount,
    totalAmount,
    distanceKm,
    isFreeDelivery,
    packageClass,
    deliveryRequirements,
    marketDelivery,
    packageSurcharge,
    breakdown,
    delivery,
    credit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
