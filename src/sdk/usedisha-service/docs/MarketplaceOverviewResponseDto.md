# MarketplaceOverviewResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gmv** | [**MarketplaceGmvDto**](MarketplaceGmvDto.md) |  | [default to undefined]
**orders** | [**MarketplaceOrdersDto**](MarketplaceOrdersDto.md) |  | [default to undefined]
**runs** | [**MarketplaceRunsDto**](MarketplaceRunsDto.md) |  | [default to undefined]
**storefronts** | [**MarketplaceStorefrontsDto**](MarketplaceStorefrontsDto.md) |  | [default to undefined]
**queues** | [**MarketplaceQueuesDto**](MarketplaceQueuesDto.md) |  | [default to undefined]
**trend** | [**Array&lt;MarketplaceTrendPointDto&gt;**](MarketplaceTrendPointDto.md) | One point per day for the trailing window, including days with no orders so the line has no gaps. | [default to undefined]
**trendDays** | **number** | Days covered by &#x60;trend&#x60;, echoed back so the caller can label the axis. | [optional] [default to undefined]

## Example

```typescript
import { MarketplaceOverviewResponseDto } from './api';

const instance: MarketplaceOverviewResponseDto = {
    gmv,
    orders,
    runs,
    storefronts,
    queues,
    trend,
    trendDays,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
