# UsedishaMarketDeliveryDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketId** | **string** | Market the order is collected from | [default to undefined]
**marketName** | **string** | Market name, for display | [optional] [default to undefined]
**windowLabel** | **string** | Run label | [default to undefined]
**cutoffAt** | **string** | Last moment an order can join this run (ISO) | [default to undefined]
**departsAt** | **string** | When the runner leaves the market (ISO) | [default to undefined]
**zoneName** | **string** | Zone band the fee was priced from | [default to undefined]

## Example

```typescript
import { UsedishaMarketDeliveryDto } from './api';

const instance: UsedishaMarketDeliveryDto = {
    marketId,
    marketName,
    windowLabel,
    cutoffAt,
    departsAt,
    zoneName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
