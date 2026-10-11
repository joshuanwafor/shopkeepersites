# UpdateMarketDeliveryConfigDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Whether this market offers bulk market delivery | [default to false]
**hub** | [**UsedishaLocation**](UsedishaLocation.md) | Collection point runners work from. Falls back to the market centroid. | [optional] [default to undefined]
**timezone** | **string** | IANA timezone the window times are expressed in | [optional] [default to 'Africa/Lagos']
**zones** | [**Array&lt;MarketDeliveryZone&gt;**](MarketDeliveryZone.md) |  | [optional] [default to undefined]
**windows** | [**Array&lt;MarketDeliveryWindow&gt;**](MarketDeliveryWindow.md) |  | [optional] [default to undefined]
**minOrderAmount** | **number** | Minimum order sub-total to qualify | [optional] [default to undefined]
**maxOrdersPerRun** | **number** | Cap on orders per run; extra orders roll to the next window | [optional] [default to undefined]
**blackoutDates** | **Array&lt;string&gt;** | Dates (YYYY-MM-DD, market-local) with no runs — public holidays, market closures | [optional] [default to undefined]

## Example

```typescript
import { UpdateMarketDeliveryConfigDto } from './api';

const instance: UpdateMarketDeliveryConfigDto = {
    enabled,
    hub,
    timezone,
    zones,
    windows,
    minOrderAmount,
    maxOrdersPerRun,
    blackoutDates,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
