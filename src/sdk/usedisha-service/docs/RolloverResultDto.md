# RolloverResultDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**run** | [**MarketRun**](MarketRun.md) | The source run after the move | [default to undefined]
**moved** | [**Array&lt;RolledOrderDto&gt;**](RolledOrderDto.md) |  | [default to undefined]
**keptOrderIds** | **Array&lt;string&gt;** | Orders no window could take — still on the source run | [default to undefined]
**sourceCancelled** | **boolean** | True when the emptied source run was cancelled | [default to undefined]

## Example

```typescript
import { RolloverResultDto } from './api';

const instance: RolloverResultDto = {
    run,
    moved,
    keptOrderIds,
    sourceCancelled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
