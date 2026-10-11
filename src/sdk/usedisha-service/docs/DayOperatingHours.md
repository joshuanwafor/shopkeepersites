# DayOperatingHours


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closed** | **boolean** | When true, closed for the whole day | [default to false]
**slots** | [**Array&lt;OperatingHoursTimeSlot&gt;**](OperatingHoursTimeSlot.md) | Open windows for this day (ignored when closed is true) | [optional] [default to undefined]

## Example

```typescript
import { DayOperatingHours } from './api';

const instance: DayOperatingHours = {
    closed,
    slots,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
