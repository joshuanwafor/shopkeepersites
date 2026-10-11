# UsedishaBulkEstimateFeesDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stores** | [**Array&lt;UsedishaBulkCheckoutStoreDto&gt;**](UsedishaBulkCheckoutStoreDto.md) | Stores to price (1–10), each once | [default to undefined]
**userLng** | **number** | Customer longitude — required for platformDelivery fee quoting | [optional] [default to undefined]
**userLat** | **number** | Customer latitude — required for platformDelivery fee quoting | [optional] [default to undefined]
**userCity** | **string** | Customer\&#39;s delivery city — used for zone-based businessDelivery fees when coordinates are unavailable | [optional] [default to undefined]
**userState** | **string** | Customer\&#39;s delivery state — used for zone-based businessDelivery fees when coordinates are unavailable | [optional] [default to undefined]

## Example

```typescript
import { UsedishaBulkEstimateFeesDto } from './api';

const instance: UsedishaBulkEstimateFeesDto = {
    stores,
    userLng,
    userLat,
    userCity,
    userState,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
