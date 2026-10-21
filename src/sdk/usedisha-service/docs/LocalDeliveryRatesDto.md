# LocalDeliveryRatesDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseFee** | **number** | Naira | [default to undefined]
**perKmRate** | **number** | Naira per km (straight line) | [default to undefined]
**minFee** | **number** | No delivery costs less | [default to undefined]
**maxKm** | **number** | Farther than this (km) is long distance, or not delivered | [default to undefined]
**freeDeliveryThreshold** | **number** | Free from this subtotal; 0 is off | [default to undefined]
**weightThresholdKg** | **number** | kg; 0 turns the weight surcharge off | [default to undefined]
**weightSurchargePerKg** | **number** | Naira per kg over the threshold | [default to undefined]
**stateRates** | [**Array&lt;DeliveryStateRateDto&gt;**](DeliveryStateRateDto.md) |  | [default to undefined]
**vehicleMultipliers** | [**VehicleMultipliersDto**](VehicleMultipliersDto.md) | Bulky orders go by car or van, at a multiple of the motorcycle price | [default to undefined]

## Example

```typescript
import { LocalDeliveryRatesDto } from './api';

const instance: LocalDeliveryRatesDto = {
    baseFee,
    perKmRate,
    minFee,
    maxKm,
    freeDeliveryThreshold,
    weightThresholdKg,
    weightSurchargePerKg,
    stateRates,
    vehicleMultipliers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
