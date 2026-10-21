# SimulationScenarioDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**fromState** | **string** | The store\&#39;s state | [default to undefined]
**toState** | **string** | The buyer\&#39;s state | [default to undefined]
**distanceKm** | **number** | Straight-line km; leave out if unknown | [optional] [default to undefined]
**subtotal** | **number** | Items\&#39; value (naira) | [default to undefined]
**items** | [**Array&lt;SimulationItemDto&gt;**](SimulationItemDto.md) |  | [default to undefined]

## Example

```typescript
import { SimulationScenarioDto } from './api';

const instance: SimulationScenarioDto = {
    name,
    fromState,
    toState,
    distanceKm,
    subtotal,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
