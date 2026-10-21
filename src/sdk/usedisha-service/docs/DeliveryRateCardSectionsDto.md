# DeliveryRateCardSectionsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local** | [**LocalDeliveryRatesDto**](LocalDeliveryRatesDto.md) |  | [optional] [default to undefined]
**longDistance** | [**LongDistanceDeliveryRatesDto**](LongDistanceDeliveryRatesDto.md) |  | [optional] [default to undefined]
**perishability** | [**PerishabilityRulesDto**](PerishabilityRulesDto.md) |  | [optional] [default to undefined]
**handlingSurcharges** | [**HandlingSurchargesDto**](HandlingSurchargesDto.md) |  | [optional] [default to undefined]
**estimatedKgByClass** | [**EstimatedWeightsDto**](EstimatedWeightsDto.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DeliveryRateCardSectionsDto } from './api';

const instance: DeliveryRateCardSectionsDto = {
    local,
    longDistance,
    perishability,
    handlingSurcharges,
    estimatedKgByClass,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
