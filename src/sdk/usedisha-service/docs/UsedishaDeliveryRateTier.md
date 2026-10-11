# UsedishaDeliveryRateTier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uptoKm** | **number** | Upper distance bound for this band, in km (inclusive). The final band acts as the \&quot;and above\&quot; rate. | [default to undefined]
**fee** | **number** | Delivery fee for orders that fall within this distance band (NGN) | [default to undefined]

## Example

```typescript
import { UsedishaDeliveryRateTier } from './api';

const instance: UsedishaDeliveryRateTier = {
    uptoKm,
    fee,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
