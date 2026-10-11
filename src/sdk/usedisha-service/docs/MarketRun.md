# MarketRun


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [readonly] [default to undefined]
**marketId** | **string** | Market this run collects from | [default to undefined]
**windowLabel** | **string** | Run label, from the market window config | [default to undefined]
**cutoffAt** | **string** | Last moment an order can join this run | [default to undefined]
**departsAt** | **string** | When the runner leaves the market | [default to undefined]
**status** | **string** |  | [default to StatusEnum_Scheduled]
**orders** | [**Array&lt;MarketRunOrder&gt;**](MarketRunOrder.md) | Manifest | [optional] [default to undefined]
**orderCount** | **number** | Denormalised manifest size | [optional] [default to 0]
**assignedTo** | **string** | Account ID of the runner working this run | [optional] [default to undefined]
**startedAt** | **string** | When collection started | [optional] [default to undefined]
**completedAt** | **string** | When the run was completed | [optional] [default to undefined]
**feesCollected** | **number** | Delivery fees collected across the manifest | [optional] [default to undefined]
**updatedBy** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [readonly] [default to undefined]
**updatedAt** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { MarketRun } from './api';

const instance: MarketRun = {
    id,
    marketId,
    windowLabel,
    cutoffAt,
    departsAt,
    status,
    orders,
    orderCount,
    assignedTo,
    startedAt,
    completedAt,
    feesCollected,
    updatedBy,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
