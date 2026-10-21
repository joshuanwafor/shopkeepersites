# SimulationItemDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**quantity** | **number** |  | [default to undefined]
**packageClass** | **string** |  | [default to undefined]
**perishability** | **string** |  | [default to undefined]
**weightKg** | **number** | kg; leave out to estimate it from the class | [optional] [default to undefined]
**lengthCm** | **number** | cm | [optional] [default to undefined]
**widthCm** | **number** |  | [optional] [default to undefined]
**heightCm** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { SimulationItemDto } from './api';

const instance: SimulationItemDto = {
    name,
    quantity,
    packageClass,
    perishability,
    weightKg,
    lengthCm,
    widthCm,
    heightCm,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
