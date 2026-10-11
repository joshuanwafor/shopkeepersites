# UsedishaBusinessDeliverySettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee** | **number** | Flat delivery fee charged by the business (NGN). Fallback when a rate card is set but the distance is unknown. | [optional] [default to undefined]
**rateCard** | [**Array&lt;UsedishaDeliveryRateTier&gt;**](UsedishaDeliveryRateTier.md) | Distance-based rate card. Bands are evaluated in ascending &#x60;uptoKm&#x60; order. | [optional] [default to undefined]
**maxDistanceKm** | **number** | Maximum straight-line distance (km) the business will deliver. Beyond this, businessDelivery is unavailable at checkout. | [optional] [default to undefined]
**zoneRates** | [**UsedishaDeliveryZoneRates**](UsedishaDeliveryZoneRates.md) | Zone-based fees applied when the delivery distance cannot be determined (no customer coordinates). | [optional] [default to undefined]
**freeDeliveryThreshold** | **number** | Cart sub-total at/above which delivery is free. 0 (default) &#x3D; never free. | [optional] [default to 0]

## Example

```typescript
import { UsedishaBusinessDeliverySettings } from './api';

const instance: UsedishaBusinessDeliverySettings = {
    fee,
    rateCard,
    maxDistanceKm,
    zoneRates,
    freeDeliveryThreshold,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
