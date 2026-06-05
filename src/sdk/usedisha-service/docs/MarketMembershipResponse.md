# MarketMembershipResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**marketId** | **string** |  | [default to undefined]
**usedishaId** | **string** |  | [default to undefined]
**businessId** | **string** |  | [default to undefined]
**branchId** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**requestedAt** | **string** |  | [optional] [default to undefined]
**reviewedAt** | **string** |  | [optional] [default to undefined]
**rejectionReason** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**market** | [**MarketSummaryDto**](MarketSummaryDto.md) | Embedded market detail | [optional] [default to undefined]
**store** | [**MembershipStoreSummaryDto**](MembershipStoreSummaryDto.md) | Embedded storefront detail | [optional] [default to undefined]
**branch** | [**MembershipBranchSummaryDto**](MembershipBranchSummaryDto.md) | Embedded branch detail | [optional] [default to undefined]

## Example

```typescript
import { MarketMembershipResponse } from './api';

const instance: MarketMembershipResponse = {
    id,
    marketId,
    usedishaId,
    businessId,
    branchId,
    status,
    requestedAt,
    reviewedAt,
    rejectionReason,
    createdAt,
    market,
    store,
    branch,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
