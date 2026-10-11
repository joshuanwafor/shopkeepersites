# RescheduleMarketRunDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**departsAt** | **string** | New departure time (ISO 8601). Must be in the future. | [default to undefined]
**cutoffAt** | **string** | New cutoff (ISO 8601). Defaults to the old cutoff, clamped to the new departure. | [optional] [default to undefined]

## Example

```typescript
import { RescheduleMarketRunDto } from './api';

const instance: RescheduleMarketRunDto = {
    departsAt,
    cutoffAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
