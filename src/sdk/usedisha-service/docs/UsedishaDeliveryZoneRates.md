# UsedishaDeliveryZoneRates


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**withinCity** | **number** | Fee for deliveries within the same city as the branch (NGN) | [optional] [default to undefined]
**cityToCity** | **number** | Fee for deliveries to another city in the same state (NGN) | [optional] [default to undefined]
**interstate** | **number** | Fee for deliveries to another state (NGN) | [optional] [default to undefined]
**pairs** | [**Array&lt;UsedishaDeliveryZonePair&gt;**](UsedishaDeliveryZonePair.md) | Explicit origin→destination state route rates (e.g. Plateau→Lagos). These override the generic withinCity/cityToCity/interstate buckets when the branch and customer states match a pair. | [optional] [default to undefined]

## Example

```typescript
import { UsedishaDeliveryZoneRates } from './api';

const instance: UsedishaDeliveryZoneRates = {
    withinCity,
    cityToCity,
    interstate,
    pairs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
