# UpdateDeliveryRateCardDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local** | [**LocalDeliveryRatesDto**](LocalDeliveryRatesDto.md) |  | [optional] [default to undefined]
**longDistance** | [**LongDistanceDeliveryRatesDto**](LongDistanceDeliveryRatesDto.md) |  | [optional] [default to undefined]
**perishability** | [**PerishabilityRulesDto**](PerishabilityRulesDto.md) |  | [optional] [default to undefined]
**handlingSurcharges** | [**HandlingSurchargesDto**](HandlingSurchargesDto.md) |  | [optional] [default to undefined]
**estimatedKgByClass** | [**EstimatedWeightsDto**](EstimatedWeightsDto.md) |  | [optional] [default to undefined]
**expectedVersion** | **number** | The version these changes were made to. If someone has saved since, nothing is saved (409). | [optional] [default to undefined]
**note** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateDeliveryRateCardDto } from './api';

const instance: UpdateDeliveryRateCardDto = {
    local,
    longDistance,
    perishability,
    handlingSurcharges,
    estimatedKgByClass,
    expectedVersion,
    note,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
