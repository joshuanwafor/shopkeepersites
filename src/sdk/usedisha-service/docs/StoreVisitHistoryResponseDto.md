# StoreVisitHistoryResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storeId** | **string** |  | [default to undefined]
**stats** | [**StoreVisitStatsDto**](StoreVisitStatsDto.md) |  | [default to undefined]
**patterns** | [**StoreVisitPatternsDto**](StoreVisitPatternsDto.md) | Aggregated visit trends and breakdowns for the selected period | [default to undefined]
**items** | [**Array&lt;StoreVisitHistoryItemDto&gt;**](StoreVisitHistoryItemDto.md) | Recent individual visits for drill-down | [default to undefined]
**nextToken** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { StoreVisitHistoryResponseDto } from './api';

const instance: StoreVisitHistoryResponseDto = {
    storeId,
    stats,
    patterns,
    items,
    nextToken,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
