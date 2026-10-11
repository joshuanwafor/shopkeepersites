# OperatingHours


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timeZone** | **string** | IANA time zone used to interpret open/close times | [optional] [default to undefined]
**monday** | [**DayOperatingHours**](DayOperatingHours.md) |  | [optional] [default to undefined]
**tuesday** | [**DayOperatingHours**](DayOperatingHours.md) |  | [optional] [default to undefined]
**wednesday** | [**DayOperatingHours**](DayOperatingHours.md) |  | [optional] [default to undefined]
**thursday** | [**DayOperatingHours**](DayOperatingHours.md) |  | [optional] [default to undefined]
**friday** | [**DayOperatingHours**](DayOperatingHours.md) |  | [optional] [default to undefined]
**saturday** | [**DayOperatingHours**](DayOperatingHours.md) |  | [optional] [default to undefined]
**sunday** | [**DayOperatingHours**](DayOperatingHours.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OperatingHours } from './api';

const instance: OperatingHours = {
    timeZone,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
