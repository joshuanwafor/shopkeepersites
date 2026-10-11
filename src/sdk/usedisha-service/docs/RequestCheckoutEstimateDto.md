# RequestCheckoutEstimateDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**selections** | [**Array&lt;RequestCheckoutSelectionDto&gt;**](RequestCheckoutSelectionDto.md) |  | [default to undefined]
**stores** | [**Array&lt;RequestCheckoutStoreDto&gt;**](RequestCheckoutStoreDto.md) |  | [optional] [default to undefined]
**userLng** | **number** | Customer longitude (defaults to the request address) | [optional] [default to undefined]
**userLat** | **number** | Customer latitude (defaults to the request address) | [optional] [default to undefined]

## Example

```typescript
import { RequestCheckoutEstimateDto } from './api';

const instance: RequestCheckoutEstimateDto = {
    selections,
    stores,
    userLng,
    userLat,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
