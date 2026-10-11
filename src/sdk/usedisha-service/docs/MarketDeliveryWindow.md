# MarketDeliveryWindow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **string** | Label shown to customers | [default to undefined]
**cutoff** | **string** | Order cut-off, market-local HH:mm | [default to undefined]
**departs** | **string** | Departure time, market-local HH:mm | [default to undefined]
**days** | **Array&lt;number&gt;** | Days this run operates. 0&#x3D;Sunday .. 6&#x3D;Saturday | [default to undefined]

## Example

```typescript
import { MarketDeliveryWindow } from './api';

const instance: MarketDeliveryWindow = {
    label,
    cutoff,
    departs,
    days,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
