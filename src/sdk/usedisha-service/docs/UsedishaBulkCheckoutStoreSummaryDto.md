# UsedishaBulkCheckoutStoreSummaryDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **string** |  | [default to undefined]
**branchId** | **string** | Branch the order was placed with | [default to undefined]
**storeName** | **string** |  | [optional] [default to undefined]
**intentReference** | **string** | This store\&#39;s order intent — track it with GET usedisha/checkout/status/:intentReference | [default to undefined]
**deliveryMethod** | **string** |  | [default to undefined]
**marketDelivery** | [**UsedishaMarketDeliveryDto**](UsedishaMarketDeliveryDto.md) |  | [optional] [default to undefined]
**summary** | [**UsedishaCheckoutSummaryDto**](UsedishaCheckoutSummaryDto.md) |  | [default to undefined]

## Example

```typescript
import { UsedishaBulkCheckoutStoreSummaryDto } from './api';

const instance: UsedishaBulkCheckoutStoreSummaryDto = {
    domain,
    branchId,
    storeName,
    intentReference,
    deliveryMethod,
    marketDelivery,
    summary,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
