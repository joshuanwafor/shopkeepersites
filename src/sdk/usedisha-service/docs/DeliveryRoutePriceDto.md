# DeliveryRoutePriceDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee** | **number** | Door to door, up to the weight threshold | [default to undefined]
**perKg** | **number** | Naira per kg over the threshold | [default to undefined]
**transitHours** | **number** | Hours on the road, store to door | [default to undefined]

## Example

```typescript
import { DeliveryRoutePriceDto } from './api';

const instance: DeliveryRoutePriceDto = {
    fee,
    perKg,
    transitHours,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
