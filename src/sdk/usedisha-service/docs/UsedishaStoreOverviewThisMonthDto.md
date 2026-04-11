# UsedishaStoreOverviewThisMonthDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**salesGrowthPercent** | **number** | Revenue growth vs previous calendar month (%). Null when the previous month had no revenue (no baseline). | [default to undefined]
**newOrders** | **number** | Orders created in the current calendar month | [default to undefined]
**pageViews** | **number** | Storefront page views this month. Returns 0 until analytics are wired. | [default to undefined]

## Example

```typescript
import { UsedishaStoreOverviewThisMonthDto } from './api';

const instance: UsedishaStoreOverviewThisMonthDto = {
    salesGrowthPercent,
    newOrders,
    pageViews,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
