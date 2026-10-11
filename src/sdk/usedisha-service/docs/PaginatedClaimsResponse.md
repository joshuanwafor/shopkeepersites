# PaginatedClaimsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Array&lt;AdminClaimListItem&gt;**](AdminClaimListItem.md) | Claims for this page | [default to undefined]
**count** | **number** |  | [default to undefined]
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
import { PaginatedClaimsResponse } from './api';

const instance: PaginatedClaimsResponse = {
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
