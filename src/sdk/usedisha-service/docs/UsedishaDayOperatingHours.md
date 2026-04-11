# UsedishaDayOperatingHours


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closed** | **boolean** | When true, the store is closed for the whole day | [default to false]
**slots** | [**Array&lt;UsedishaTimeSlot&gt;**](UsedishaTimeSlot.md) | Open windows for this day (ignored when closed is true) | [optional] [default to undefined]

## Example

```typescript
import { UsedishaDayOperatingHours } from './api';

const instance: UsedishaDayOperatingHours = {
    closed,
    slots,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
