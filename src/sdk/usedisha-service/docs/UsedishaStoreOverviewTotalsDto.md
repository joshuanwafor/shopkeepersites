# UsedishaStoreOverviewTotalsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalOrders** | **number** | Orders received (all time, Usedisha branch) | [default to undefined]
**totalRevenue** | **number** | Sum of order totals (all time) | [default to undefined]
**productsListed** | **number** | Products with usedisha context on the connected branch | [default to undefined]
**storeViews** | **number** | Lifetime storefront visits. Returns 0 until server-side view tracking exists. | [default to undefined]

## Example

```typescript
import { UsedishaStoreOverviewTotalsDto } from './api';

const instance: UsedishaStoreOverviewTotalsDto = {
    totalOrders,
    totalRevenue,
    productsListed,
    storeViews,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
