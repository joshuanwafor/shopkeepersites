# UsedishaEstimateFeesDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **string** | Usedisha store domain | [default to undefined]
**branchId** | **string** | Branch to price against. Defaults to the storefront default branch when omitted. | [optional] [default to undefined]
**items** | [**Array&lt;UsedishaCheckoutItemDto&gt;**](UsedishaCheckoutItemDto.md) | Cart items to estimate fees for | [default to undefined]
**deliveryMethod** | **string** | How the order will be fulfilled | [default to undefined]
**userLng** | **number** | Customer longitude — required for platformDelivery fee quoting | [optional] [default to undefined]
**userLat** | **number** | Customer latitude — required for EXPRESS delivery fee calculation | [optional] [default to undefined]

## Example

```typescript
import { UsedishaEstimateFeesDto } from './api';

const instance: UsedishaEstimateFeesDto = {
    domain,
    branchId,
    items,
    deliveryMethod,
    userLng,
    userLat,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
