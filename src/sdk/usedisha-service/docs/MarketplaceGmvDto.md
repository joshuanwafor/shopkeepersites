# MarketplaceGmvDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Paid marketplace revenue, all time | [default to undefined]
**thisMonth** | **number** | Paid revenue in the current calendar month | [default to undefined]
**lastMonth** | **number** | Paid revenue in the previous calendar month | [default to undefined]
**growthPercent** | **number** | Month-on-month growth (%). Null when last month had no revenue — there is no baseline to grow from, and 100% would be a lie. | [default to undefined]

## Example

```typescript
import { MarketplaceGmvDto } from './api';

const instance: MarketplaceGmvDto = {
    total,
    thisMonth,
    lastMonth,
    growthPercent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
