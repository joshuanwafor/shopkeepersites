# CommissionConfigResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storefrontPercent** | **number** |  | [default to undefined]
**marketplacePercent** | **number** |  | [default to undefined]
**serviceFeeType** | **string** | Unset when no value has been saved — the checkout falls back to its deploy-time env default in that case. | [optional] [default to undefined]
**serviceFeeValue** | **number** | Unset when no value has been saved. See serviceFeeType. | [optional] [default to undefined]
**runnerDeliveryPercent** | **number** | Share (%) of the delivery fee a market runner earns per completed delivery. | [default to undefined]
**updatedBy** | **string** | Admin who last updated the config. | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CommissionConfigResponseDto } from './api';

const instance: CommissionConfigResponseDto = {
    storefrontPercent,
    marketplacePercent,
    serviceFeeType,
    serviceFeeValue,
    runnerDeliveryPercent,
    updatedBy,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
