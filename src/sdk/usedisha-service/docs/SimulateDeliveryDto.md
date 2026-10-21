# SimulateDeliveryDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scenarios** | [**Array&lt;SimulationScenarioDto&gt;**](SimulationScenarioDto.md) |  | [default to undefined]
**draft** | [**DeliveryRateCardSectionsDto**](DeliveryRateCardSectionsDto.md) | Unsaved changes: each scenario is priced with the saved card and with these | [optional] [default to undefined]

## Example

```typescript
import { SimulateDeliveryDto } from './api';

const instance: SimulateDeliveryDto = {
    scenarios,
    draft,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
