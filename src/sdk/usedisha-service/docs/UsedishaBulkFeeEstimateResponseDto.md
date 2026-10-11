# UsedishaBulkFeeEstimateResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stores** | [**Array&lt;UsedishaBulkStoreFeeEstimateDto&gt;**](UsedishaBulkStoreFeeEstimateDto.md) |  | [default to undefined]
**allAvailable** | **boolean** | Whether every store could be priced — checkout needs all of them | [default to undefined]
**totals** | [**UsedishaBulkFeeTotalsDto**](UsedishaBulkFeeTotalsDto.md) | Sums over the stores that could be priced | [default to undefined]
**credit** | [**UsedishaCheckoutCreditDto**](UsedishaCheckoutCreditDto.md) | Signed-in shoppers only, while rewards are on: their credit and how much of this checkout it can pay | [optional] [default to undefined]

## Example

```typescript
import { UsedishaBulkFeeEstimateResponseDto } from './api';

const instance: UsedishaBulkFeeEstimateResponseDto = {
    stores,
    allAvailable,
    totals,
    credit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
