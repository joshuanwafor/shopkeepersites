# UsedishaEstimateFeesDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **string** | Usedisha store domain | [default to undefined]
**branchId** | **string** | Branch to price against. Defaults to the storefront default branch when omitted. | [optional] [default to undefined]
**items** | [**Array&lt;UsedishaCheckoutItemDto&gt;**](UsedishaCheckoutItemDto.md) | Cart items to estimate fees for | [default to undefined]
**deliveryMethod** | **string** | How the order will be fulfilled | [default to undefined]
**packageClass** | **string** | Customer-selected package/handling class. Adjusts the delivery fee. Defaults to &#x60;parcel&#x60;. | [optional] [default to PackageClassEnum_Parcel]
**marketDeliveryWindow** | **string** | Market-delivery run to join, by label (e.g. \&quot;Afternoon run\&quot;). Optional on estimate-fees (the server picks the next run and reports it back), but REQUIRED on checkout when deliveryMethod is &#x60;marketDelivery&#x60; — an unpinned checkout would place the customer on a different run from the one quoted. A stale run is rejected with code &#x60;MARKET_RUN_EXPIRED&#x60;; a missing one with &#x60;MARKET_RUN_REQUIRED&#x60;. Re-quote and confirm with the customer. | [optional] [default to undefined]
**userLng** | **number** | Customer longitude — required for platformDelivery fee quoting | [optional] [default to undefined]
**userLat** | **number** | Customer latitude — required for EXPRESS delivery fee calculation | [optional] [default to undefined]
**userCity** | **string** | Customer\&#39;s delivery city — used for zone-based businessDelivery fees when coordinates are unavailable | [optional] [default to undefined]
**userState** | **string** | Customer\&#39;s delivery state — used for zone-based businessDelivery fees when coordinates are unavailable | [optional] [default to undefined]

## Example

```typescript
import { UsedishaEstimateFeesDto } from './api';

const instance: UsedishaEstimateFeesDto = {
    domain,
    branchId,
    items,
    deliveryMethod,
    packageClass,
    marketDeliveryWindow,
    userLng,
    userLat,
    userCity,
    userState,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
