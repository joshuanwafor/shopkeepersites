# MarketRunSummaryDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Runs matching the filter | [default to undefined]
**active** | **number** | Scheduled, collecting or in transit | [default to undefined]
**unassigned** | **number** | Active runs with no runner assigned | [default to undefined]
**stranded** | **number** | Past their departure time and still at the market — paid orders are waiting | [default to undefined]
**ordersInFlight** | **number** | Orders sitting on active runs | [default to undefined]

## Example

```typescript
import { MarketRunSummaryDto } from './api';

const instance: MarketRunSummaryDto = {
    total,
    active,
    unassigned,
    stranded,
    ordersInFlight,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
