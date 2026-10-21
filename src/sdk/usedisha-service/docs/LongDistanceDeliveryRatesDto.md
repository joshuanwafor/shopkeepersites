# LongDistanceDeliveryRatesDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | Off: no delivery beyond the local area | [default to undefined]
**routes** | [**Array&lt;DeliveryRouteDto&gt;**](DeliveryRouteDto.md) |  | [default to undefined]
**defaultRoute** | [**DeliveryRoutePriceDto**](DeliveryRoutePriceDto.md) | For pairs with no route; null means no delivery there | [optional] [default to undefined]
**weightThresholdKg** | **number** | kg a route’s fee covers | [default to undefined]
**volumetricDivisor** | **number** | cm³ per kg for volumetric weight | [default to undefined]
**handoverHours** | **number** | Packing and waiting for a departure, in hours | [default to undefined]
**coldPackFee** | **number** | Per order with chilled or frozen items | [default to undefined]
**perishableCoverPercent** | **number** | Percent of the subtotal, for orders with perishables | [default to undefined]

## Example

```typescript
import { LongDistanceDeliveryRatesDto } from './api';

const instance: LongDistanceDeliveryRatesDto = {
    enabled,
    routes,
    defaultRoute,
    weightThresholdKg,
    volumetricDivisor,
    handoverHours,
    coldPackFee,
    perishableCoverPercent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
