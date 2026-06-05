# PaginatedMarketsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Array&lt;Market&gt;**](Market.md) | Markets for this page | [default to undefined]
**count** | **number** | Total matching markets | [default to undefined]
**page** | **number** |  | [default to undefined]
**limit** | **number** |  | [default to undefined]
**hasNextPage** | **boolean** |  | [default to undefined]
**hasPreviousPage** | **boolean** |  | [default to undefined]
**nextPage** | **number** |  | [default to undefined]
**previousPage** | **number** |  | [default to undefined]
**totalPages** | **number** |  | [default to undefined]
**currentPage** | **number** |  | [default to undefined]
**totalCount** | **number** |  | [default to undefined]

## Example

```typescript
import { PaginatedMarketsResponse } from './api';

const instance: PaginatedMarketsResponse = {
    data,
    count,
    page,
    limit,
    hasNextPage,
    hasPreviousPage,
    nextPage,
    previousPage,
    totalPages,
    currentPage,
    totalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
