# EstimateOrderFeesDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;UsedishaCheckoutItemDto&gt;**](UsedishaCheckoutItemDto.md) | Cart items to estimate fees for | [default to undefined]
**deliveryMethod** | **string** | How the order will be fulfilled | [default to undefined]
**userLng** | **number** | Customer longitude — required for EXPRESS delivery fee calculation | [optional] [default to undefined]
**userLat** | **number** | Customer latitude — required for EXPRESS delivery fee calculation | [optional] [default to undefined]

## Example

```typescript
import { EstimateOrderFeesDto } from './api';

const instance: EstimateOrderFeesDto = {
    items,
    deliveryMethod,
    userLng,
    userLat,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
