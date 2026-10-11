# UpdateCommissionConfigDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storefrontPercent** | **number** | Commission % on subtotal for direct storefront orders (0–100). | [optional] [default to undefined]
**marketplacePercent** | **number** | Commission % on subtotal for marketplace orders (0–100). | [optional] [default to undefined]
**serviceFeeType** | **string** | Whether the platform service charge is a flat naira amount or a % of subtotal. | [optional] [default to undefined]
**serviceFeeValue** | **number** | Flat naira amount, or percentage of subtotal, depending on serviceFeeType. Not capped at 100 — a flat fee is an amount, not a percentage. | [optional] [default to undefined]
**runnerDeliveryPercent** | **number** | Share (%) of the delivery fee a market runner earns per completed delivery. | [optional] [default to undefined]

## Example

```typescript
import { UpdateCommissionConfigDto } from './api';

const instance: UpdateCommissionConfigDto = {
    storefrontPercent,
    marketplacePercent,
    serviceFeeType,
    serviceFeeValue,
    runnerDeliveryPercent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
