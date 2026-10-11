# MarketplaceRunsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Runs in the reporting window | [default to undefined]
**active** | **number** | Scheduled, collecting or in transit | [default to undefined]
**unassigned** | **number** | Active runs with nobody assigned | [default to undefined]
**stranded** | **number** | Past departure and still at the market | [default to undefined]
**ordersInFlight** | **number** | Orders sitting on active runs | [default to undefined]

## Example

```typescript
import { MarketplaceRunsDto } from './api';

const instance: MarketplaceRunsDto = {
    total,
    active,
    unassigned,
    stranded,
    ordersInFlight,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
