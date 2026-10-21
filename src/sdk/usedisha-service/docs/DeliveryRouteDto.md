# DeliveryRouteDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee** | **number** | Door to door, up to the weight threshold | [default to undefined]
**perKg** | **number** | Naira per kg over the threshold | [default to undefined]
**transitHours** | **number** | Hours on the road, store to door | [default to undefined]
**from** | **string** |  | [default to undefined]
**to** | **string** | The same state for a long same-state trip | [default to undefined]
**twoWay** | **boolean** | Also prices the way back | [default to undefined]
**active** | **boolean** | Paused routes are kept but not offered | [optional] [default to undefined]

## Example

```typescript
import { DeliveryRouteDto } from './api';

const instance: DeliveryRouteDto = {
    fee,
    perKg,
    transitHours,
    from,
    to,
    twoWay,
    active,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
