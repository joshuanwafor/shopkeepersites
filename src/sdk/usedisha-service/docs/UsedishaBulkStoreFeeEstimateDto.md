# UsedishaBulkStoreFeeEstimateDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **string** |  | [default to undefined]
**branchId** | **string** |  | [optional] [default to undefined]
**estimate** | [**UsedishaOrderFeeEstimateResponseDto**](UsedishaOrderFeeEstimateResponseDto.md) | This store\&#39;s fees — present when it could be priced | [optional] [default to undefined]
**error** | [**UsedishaBulkStoreErrorDto**](UsedishaBulkStoreErrorDto.md) | Present when this store could not be priced | [optional] [default to undefined]

## Example

```typescript
import { UsedishaBulkStoreFeeEstimateDto } from './api';

const instance: UsedishaBulkStoreFeeEstimateDto = {
    domain,
    branchId,
    estimate,
    error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
